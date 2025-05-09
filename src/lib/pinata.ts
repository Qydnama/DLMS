import { PinataSDK } from "pinata";
import { CourseDataInterface } from "@/types/courseData";
import { extractYoutubeVideoId } from "@/components/createCourse/videoExistsLogic";

export const createPinataInstance = (jwt: string, gateway: string) => {
    return new PinataSDK({
        pinataJwt: jwt,
        pinataGateway: gateway,
    });
};

export const checkPinataConnection = async (jwt: string): Promise<boolean> => {
    try {
        const res = await fetch(
            "https://api.pinata.cloud/data/testAuthentication",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );

        return res.ok;
    } catch (error) {
        console.error("Ошибка при проверке Pinata:", error);
        return false;
    }
};

export const findPinataGateway = async (jwt: string): Promise<string> => {
    try {
        const res = await fetch("https://api.pinata.cloud/v3/ipfs/gateways", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch gateways");
        }

        const data = await res.json();
        const gateway = data?.data?.rows?.[0]?.domain;
        if (!gateway) throw new Error("No available gateways");
        return gateway;
    } catch (error) {
        console.error("Ошибка при получении шлюза:", error);
        throw error;
    }
};


async function getBase64FromImageURL(imageUrl: string): Promise<string> {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result as string);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

export async function uploadImageToPinata(
    type: string,
    courseName: string,
    base64: string,
    pinata: PinataSDK
): Promise<string> {
    try {
        const baseFilename = `${type}_${formatCourseFilename(courseName)}`;
        let file;
        if (type == "certificate" && base64 == "/images/cards/1.png") {
            console.log("AWDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
            const fullBase64 = await getBase64FromImageURL(base64);
            console.log("fullBase64", fullBase64);
            file = base64ToFile(fullBase64, baseFilename);
            console.log("fileCERTIFICATE", file);
        } else {
            file = base64ToFile(base64, baseFilename);
        }
        console.log("file", file);
        const result = await pinata.upload.public.file(file);
        return `${result.cid}`;
    } catch (error) {
        console.error(`Error uploading ${type} image to Pinata:`, error);
        throw error;
    }
}

function formatCourseFilename(courseName: string): string {
    return courseName
        .trim()
        .slice(0, 20)
        .replace(/\s+/g, "_")
        .replace(/[^\w-]/g, "");
}

function base64ToFile(base64: string, filename: string): File {
    let mime = "image/png";
    let ext = "png";
    let data = base64;

    if (base64.includes(",")) {
        const parts = base64.split(",");
        const match = parts[0].match(/data:(image\/(png|jpeg|jpg|webp));base64/);
        if (match) {
            mime = match[1];
            ext = match[2] === "jpeg" ? "jpg" : match[2];
        }
        data = parts[1];
    }

    const binary = atob(data);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        array[i] = binary.charCodeAt(i);
    }

    return new File([array], `${filename}.${ext}`, { type: mime });
}

export async function uploadImagesToPinata(
    image: string,
    cover_image: string,
    certificate: string,
    pinata: PinataSDK,
    courseName: string
): Promise<[string, string, string]> {
    const imageUrl = await uploadImageToPinata(
        "logo",
        courseName,
        image,
        pinata
    );
    const coverImageUrl =
        cover_image !== ""
            ? await uploadImageToPinata(
                  "cover",
                  courseName,
                  cover_image,
                  pinata
              )
            : "";
    const certificateUrl = await uploadImageToPinata(
        "certificate",
        courseName,
        certificate,
        pinata
    );

    return [imageUrl, coverImageUrl, certificateUrl];
}

export async function uploadCourseDataToPinata(
    course: CourseDataInterface,
    pinata: PinataSDK
): Promise<string> {
    try {
        const result = await pinata.upload.public
            .json(course)
            .name(`${formatCourseFilename(course.name)}.json`);
        return `${result.cid}`;
    } catch (error) {
        console.error("Error uploading course data to Pinata:", error);
        throw error;
    }
}

export async function sendCourseToPinata(
    course: CourseDataInterface,
    jwt: string
): Promise<string> {
    const gateway = await findPinataGateway(jwt);
    const pinata = createPinataInstance(jwt, gateway);
    console.log("pinata", course.courseCompletion[0].certificate);
    const [imageUrl, coverImageUrl, certificateUrl] =
        await uploadImagesToPinata(
            course.image,
            course.cover_image || "",
            course.courseCompletion[0].certificate,
            pinata,
            course.name
        );
    const cleaned = reformatCourseData(
        course,
        imageUrl,
        coverImageUrl,
        certificateUrl
    ); // You should already have this

    console.log("cleaned", cleaned);
    return await uploadCourseDataToPinata(cleaned, pinata);
}

export function reformatCourseData(
    course: CourseDataInterface,
    imageUrl: string,
    coverImageUrl: string,
    certificateUrl: string
): CourseDataInterface {
    const formatted = { ...course };

    // Count total lessons
    let lessonCount = 0;
    formatted.image = imageUrl;
    formatted.cover_image = coverImageUrl;
    formatted.courseCompletion[0].certificate = certificateUrl;

    // Extract videoId and count lessons
    formatted.modules = formatted.modules.map((mod) => {
        const updatedLessons = mod.lessons.map((lesson) => {
            lessonCount++;
            return {
                id: lesson.id || crypto.randomUUID(),
                title: lesson.title,
                videoId: extractYoutubeVideoId(lesson.videoId) || "",
            };
        });

        return {
            ...mod,
            lessons: updatedLessons,
        };
    });
    if (course.video) {
        formatted.video = extractYoutubeVideoId(course.video) || undefined;
    }

    formatted.attributes.lessons = lessonCount;
    console.log("formatted", formatted);
    return formatted;
}
