export type TagColor = "blue" | "green" | "purple" | "gray";

export type SupportDocument = {
  title: string;
  tag: string;
  tagColor: TagColor;
};

export const supportDocuments: SupportDocument[] = [
  { title: "Cover Letter", tag: "Embassy-Approved Format", tagColor: "blue"   },
  { title: "Sponsorship Letter", tag: "Embassy-Approved Format", tagColor: "blue"   },
  { title: "Flight Reservations", tag: "Flexible travel reservations", tagColor: "green"  },
  { title: "Hotel Reservations", tag: "Flexible travel reservations", tagColor: "green"  },
  { title: "Financial Review", tag: "Approval-Driven Guidance", tagColor: "purple" },
  { title: "No Objection Certificate", tag: "Embassy-Approved Format", tagColor: "blue"   },
  { title: "Property Ownership", tag: "Only if it strengthens your case", tagColor: "gray"   },
];
