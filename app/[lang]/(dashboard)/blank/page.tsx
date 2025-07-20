"use client";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
const BlankPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>Utility</BreadcrumbItem>
        <BreadcrumbItem className="text-primary">Blank Page</BreadcrumbItem>
      </Breadcrumb>
      <div className="mt-5 text-2xl font-medium text-default-900">
        Blank Page
      </div>
    </div>
  );
};

export default BlankPage;
