import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCourseBuilder } from "@/hooks/useCourseBuilder";
import { CourseAction } from "@/context/courseBuilderProvider";


import { Image } from "lucide-react";



export function Information({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useCourseBuilder();

    const handleInputChange = <T extends string>(
        actionType: CourseAction["type"],
        value: T
      ) => {
        // Проверка на совместимость типа
        if (actionType === "SET_TITLE" || actionType === "SET_SUMMARY" || actionType === "SET_LOGO" || 
            actionType === "SET_RECOMMENDED_WORKLOAD" || actionType === "SET_WHAT_YOU_WILL_LEARN" || 
            actionType === "SET_ABOUT" || actionType === "SET_WHAT_YOU_WILL_GAIN" || 
            actionType === "SET_INITIAL_REQUIREMENTS") {
          dispatch({ type: actionType, payload: value });
        } else {
          console.error(`Invalid action type: ${actionType}`);
        }
      };

    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            dispatch({ type: "SET_LOGO", payload: reader.result as string });
          };
          reader.readAsDataURL(file);
        }
      };



      return (
        <div className="p-6 max-w-4xl mx-auto">
          {children}
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Information</h2>
          <form className="space-y-6 w-full max-w-2xl">
            {/* Logo Upload */}
            <div>
              <Card className="w-[180px] h-[180px] p-4 flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg relative">
                <div>
                  <Image className="text-gray-500"/>
                  <p className="text-gray-500">Logo</p>
                  <p className="text-xs text-gray-400">PNG file with transparency, 230×230px</p>
                </div>
                <input
                  type="file"
                  accept="image/png"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleLogoUpload}
                  
                />
              </Card>
            </div>
      
            {/* Title */}
            <div>
              <Label htmlFor="title" className="mb-2 block text-sm font-medium">
                Title
              </Label>
              <Input
                id="title"
                className="w-full"
                placeholder="Enter course title"
                value={state.title}
                onChange={(e) => handleInputChange("SET_TITLE", e.target.value)}
                maxLength={64}
              />
              <div className="text-gray-500 text-xs mt-1 text-right">
                <span>{state.title.length}/64</span>
              </div>
            </div>
      
            {/* Summary */}
            <div>
              <Label htmlFor="summary" className="mb-2 block text-sm font-medium">
                Summary
              </Label>
              <Textarea
                id="summary"
                className="w-full"
                placeholder="Enter a short summary of the course"
                value={state.summary}
                onChange={(e) => handleInputChange("SET_SUMMARY", e.target.value)}
                maxLength={512}
              />
              <div className="text-gray-500 text-xs mt-1 text-right">
                <span>{state.summary.length}/512</span>
              </div>
            </div>
      
            {/* Recommended Workload */}
            <div>
              <Label htmlFor="workload" className="mb-2 block text-sm font-medium">
                Recommended Workload
              </Label>
              <Input
                id="workload"
                className="w-full"
                placeholder="e.g., 10 hours per week"
                value={state.recommendedWorkload || ""}
                onChange={(e) => handleInputChange("SET_RECOMMENDED_WORKLOAD", e.target.value)}
                maxLength={24}
              />
              <div className="text-gray-500 text-xs mt-1 text-right">
                <span>{state.recommendedWorkload.length}/24</span>
              </div>
            </div>
      
            {/* What You Will Learn */}
            <div>
              <Label htmlFor="learning" className="mb-2 block text-sm font-medium">
                What You Will Learn
              </Label>
              <Textarea
                id="learning"
                className="w-full"
                placeholder="List key learnings from this course"
                value={state.whatYouWillLearn || ""}
                onChange={(e) => handleInputChange("SET_WHAT_YOU_WILL_LEARN", e.target.value)}
                maxLength={512}
              />
              <div className="text-gray-500 text-xs mt-1 text-right">
                <span>{state.whatYouWillLearn.length}/512</span>
              </div>
            </div>
      
            {/* About the Course */}
            <div>
              <Label htmlFor="about" className="mb-2 block text-sm font-medium">
                About the Course
              </Label>
              <Textarea
                id="about"
                className="w-full"
                placeholder="Enter detailed information about the course"
                value={state.about || ""}
                onChange={(e) => handleInputChange("SET_ABOUT", e.target.value)}
                maxLength={512}
              />
              <div className="text-gray-500 text-xs mt-1 text-right">
                <span>{state.about.length}/512</span>
              </div>
            </div>
      
            {/* What You Will Gain */}
            <div>
              <Label htmlFor="gain" className="mb-2 block text-sm font-medium">
                What You Will Gain
              </Label>
              <Textarea
                id="gain"
                className="w-full"
                placeholder="List benefits and skills gained from this course"
                value={state.whatYouWillGain || ""}
                onChange={(e) => handleInputChange("SET_WHAT_YOU_WILL_GAIN", e.target.value)}
                maxLength={512}
              />
              <div className="text-gray-500 text-xs mt-1 text-right">
                <span>{state.whatYouWillGain.length}/512</span>
              </div>
            </div>
      
            {/* Initial Requirements */}
            <div>
              <Label htmlFor="requirements" className="mb-2 block text-sm font-medium">
                Initial Requirements
              </Label>
              <Textarea
                id="requirements"
                className="w-full"
                placeholder="Specify prerequisites for enrolling in this course"
                value={state.initialRequirements || ""}
                onChange={(e) => handleInputChange("SET_INITIAL_REQUIREMENTS", e.target.value)}
                maxLength={512}
              />
              <div className="text-gray-500 text-xs mt-1 text-right">
                <span>{state.initialRequirements.length}/512</span>
              </div> 
            </div>
          </form>
        </div>
      );
      
}
