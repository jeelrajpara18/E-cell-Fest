import {
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
  IconChecklist,
  IconAffiliate,
  IconAward
} from "@tabler/icons-react";
export const items = [
    {
      title: "Event Kickoff",
      description:"Orientation session introducing participants to the event..",
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      duration: "9:00 AM - 10:00 AM",
    },
    {
      title: "Phase 1: Task Assignment",
      description: "Domain-specific tasks assigned to participants.",
      className: "md:col-span-1",
      icon: <IconChecklist className="h-4 w-4 text-neutral-500" />,
      duration: "10:15 AM - 1:45 PM",
    },
    {
      title: "Networking Session",
      description: "Ice-breaking and collaborative networking opportunities.",
      className: "md:col-span-1",
      icon: <IconAffiliate className="h-4 w-4 text-neutral-500" />,
      duration: "2:00 PM - 3:00 PM",
    },
    {
      title: "Final Showcase",
      description: "Teams present their collaborative projects.",
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      duration: "3:15 PM - 5:00 PM",
    },
    {
      title: "Awards Ceremony",
      description: "Recognition of top-performing teams and domains.",
      className: "md:col-span-2",
      icon: <IconAward className="h-4 w-4 text-neutral-500" />,
      duration: "5:15 PM - 5:45 PM",
    },
    {
      title: "Closing Ceremony",
      description: "Reflection, feedback, and next steps for E-Cell initiatives.",
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      duration: "5:45 PM - 6:30 PM",
    },
  ];