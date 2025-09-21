import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://algorithm-prep.example.com",
  integrations: [
    starlight({
      title: "Algorithm Prep",
      description:
        "Deep-dive notes and practice problems for mastering the two pointers technique.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [{ label: "Welcome", link: "/" }],
        },
        {
          label: "Foundations",
          items: [
            { label: "Overview", link: "/two-pointers/overview/" },
            { label: "Bird's-Eye Map", link: "/two-pointers/birds-eye/" },
            {
              label: "Opposite Ends Strategy",
              link: "/two-pointers/opposite-ends/",
            },
          ],
        },
        {
          label: "Practice Problems",
          items: [
            { label: "Two Sum", link: "/two-pointers/two-sum/" },
            {
              label: "Container With Most Water",
              link: "/two-pointers/container-with-most-water/",
            },
            {
              label: "Trapping Rainwater",
              link: "/two-pointers/trapping-rainwater/",
            },
            {
              label: "Detect Cycle in Linked List",
              link: "/two-pointers/detect-cycle-in-linked-list/",
            },
            {
              label: "Palindrome Check",
              link: "/two-pointers/palindrome-check/",
            },
            {
              label: "Remove Duplicates in Sorted Array",
              link: "/two-pointers/remove-duplicates-in-sorted-array/",
            },
          ],
        },
      ],
    }),
    sitemap(),
  ],
});
