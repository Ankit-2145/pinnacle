import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { servicesData, generateSlug } from "@/data/services-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => generateSlug(service.title) === slug);
}
