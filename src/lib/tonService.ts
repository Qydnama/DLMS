import { getCollectionData, getEventsUrl, ipfsToHttp } from "@/lib/tonHelpers";
import { ApiResponse } from "@/types/tonTypes";
import { CourseDataInterface, EnrolledCoursePreview } from "@/types/courseData";

const ENROLLED_MESSAGE = "You have successfully enrolled to the course!";

export async function fetchEnrolledCourseAddresses(
    studentAddress: string
): Promise<string[]> {
    const enrolledCourses: string[] = [];
    const response = await fetch(getEventsUrl(studentAddress, 100));

    const { events }: ApiResponse = await response.json();
    events.forEach((e) => {
        if (e.in_progress) {
            return;
        }
        e.actions.forEach((a) => {
            if (!(a.type === "TonTransfer" && a.status === "ok")) {
                return;
            }
            if (a.TonTransfer.comment === ENROLLED_MESSAGE) {
                enrolledCourses.push(a.TonTransfer.sender.address);
            }
        });
    });

    return enrolledCourses;
}

export async function fetchIfEnrolled(
    userAddress: string,
    contractAddress: string
  ): Promise<CourseDataInterface> {
    const enrolledCourses = await fetchEnrolledCourseAddresses(userAddress);
    if (!enrolledCourses.includes(contractAddress)) {
        throw new Error("Access denied");
    }
    const { collectionContent } = await getCollectionData(contractAddress);
    const data = await fetch(collectionContent).then((res) => res.json());
  
    return data as CourseDataInterface;
}

export async function fetchPromo(
    contractAddress: string
  ): Promise<CourseDataInterface> {

    const { collectionContent } = await getCollectionData(contractAddress);
    const data = await fetch(collectionContent).then((res) => res.json());
  
    return data as CourseDataInterface;
}

export async function listEnrolledCourses(
    userAddress: string
): Promise<EnrolledCoursePreview[]> {
    const courseAddrs = await fetchEnrolledCourseAddresses(userAddress);

    const previews = await Promise.all(
        courseAddrs.map(async (addr): Promise<EnrolledCoursePreview | null> => {
            try {
                const { collectionContent } = await getCollectionData(addr);
                const course: CourseDataInterface = await fetch(
                    collectionContent
                ).then((res) => res.json());

                return {
                    courseAddress: addr,
                    title: course.name,
                    image: ipfsToHttp(course.image),
                };
            } catch (err) {
                console.warn("Skipping invalid course:", addr, err);
                return null;
            }
        })
    );

    return previews.filter(Boolean) as EnrolledCoursePreview[];
}
