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
        name={`links.${index}.platforms`}
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
                <SelectItem value="Github">Github</SelectItem>
                <SelectItem value="Twitter">Twitter</SelectItem>
                <SelectItem value="Linkedin">Linkedin</SelectItem>
                <SelectItem value="Dev.to">Dev.to</SelectItem>
                <SelectItem value="Codeware">Codeware</SelectItem>
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
          <FormItem className="w-ful mt-2">
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
