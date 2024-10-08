"use client";

import { z } from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { linkSchema } from "@/lib/schema";

type LinkFormValues = z.infer<typeof linkSchema>;

interface FormSectionProps {
  form: any;
  index: number;
}

export default function FormSection({ form, index }: FormSectionProps) {
  return (
    <>
      <FormField
        control={form.control}
        name={`links.${index}.platform`}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-charcoal">Platform</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl className="px-0.5 text-sm font-normal text-gray md:px-3">
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="github">Github</SelectItem>
                <SelectItem value="frontendMentor">Frontend Mentor</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="twitch">Twitch</SelectItem>
                <SelectItem value="devTo">Dev.to</SelectItem>
                <SelectItem value="codewars">Codewars</SelectItem>
                <SelectItem value="freeCodeCamp">freeCodeCamp</SelectItem>
                <SelectItem value="gitlab">GitLab</SelectItem>
                <SelectItem value="hashnode">Hashnode</SelectItem>
                <SelectItem value="stackOverflow">Stack Overflow</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`links.${index}.link`}
        render={({ field }) => (
          <FormItem className="mt-2 w-full">
            <FormLabel className="text-charcoal">Link</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
