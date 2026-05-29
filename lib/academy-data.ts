import type { ComparisonTimelineMilestone } from "@/components/Timeline";

export const academyLinks = [
  { label: "West Point admissions", href: "https://www.westpoint.edu/admissions" },
  { label: "Naval Academy admissions", href: "https://www.usna.edu/Admissions/" },
  { label: "Air Force Academy admissions", href: "https://www.academyadmissions.com/" },
  { label: "Coast Guard Academy admissions", href: "https://uscga.edu/admissions/" },
  { label: "Merchant Marine Academy admissions", href: "https://www.usmma.edu/admissions" }
];

export const academyDetails = [
  {
    name: "West Point",
    formalName: "U.S. Military Academy",
    location: "West Point, New York",
    commitment:
      "Most graduates commission as Army officers after four years and serve a required active duty and reserve obligation.",
    source: "https://www.westpoint.edu/admissions"
  },
  {
    name: "Naval Academy",
    formalName: "U.S. Naval Academy",
    location: "Annapolis, Maryland",
    commitment:
      "Most graduates commission as Navy ensigns or Marine Corps second lieutenants after four years and serve a required obligation.",
    source: "https://www.usna.edu/Admissions/"
  },
  {
    name: "Air Force Academy",
    formalName: "U.S. Air Force Academy",
    location: "Colorado Springs, Colorado",
    commitment:
      "Most graduates commission as Air Force or Space Force officers after four years and serve a required obligation.",
    source: "https://www.academyadmissions.com/"
  },
  {
    name: "Coast Guard Academy",
    formalName: "U.S. Coast Guard Academy",
    location: "New London, Connecticut",
    commitment:
      "Most graduates commission as Coast Guard ensigns after four years and serve a required obligation.",
    source: "https://uscga.edu/admissions/"
  },
  {
    name: "Merchant Marine Academy",
    formalName: "U.S. Merchant Marine Academy",
    location: "Kings Point, New York",
    commitment:
      "Graduates have maritime and service obligation options that should be reviewed carefully with official academy sources.",
    source: "https://www.usmma.edu/admissions"
  }
];

export const academyTimelineMilestones: ComparisonTimelineMilestone[] = [
  {
    period: "Junior Year Winter/Spring",
    title: "Build the foundation",
    text: "Research academies, prepare for SAT/ACT testing, and begin fitness preparation.",
    kind: "universal",
    timelines: ["Universal"]
  },
  {
    period: "Dec-Mar",
    academy: "Summer programs",
    title: "Summer seminar windows",
    text: "Optional academy summer programs usually open during winter and early spring. Verify dates annually.",
    kind: "academy",
    timelines: ["West Point", "Naval Academy", "Air Force Academy"],
    details: [
      { timeline: "Air Force Academy", text: "Air Force Academy: Summer Seminar usually Dec-Jan" },
      { timeline: "West Point", text: "West Point: SLE applications usually Jan-Mar" },
      { timeline: "Naval Academy", text: "Naval Academy: Summer Seminar usually Jan-Mar" }
    ]
  },
  {
    period: "Feb-Apr",
    academy: "Preliminary applications",
    title: "Pre-candidate doors open",
    text: "Several academies open the first application step during spring of junior year.",
    kind: "academy",
    timelines: ["West Point", "Naval Academy", "Air Force Academy"],
    details: [
      { timeline: "West Point", text: "West Point: Pre-Candidate Questionnaire usually opens February" },
      { timeline: "Air Force Academy", text: "Air Force Academy: Pre-Candidate Questionnaire usually opens March" },
      { timeline: "Naval Academy", text: "Naval Academy: preliminary application usually opens April" }
    ]
  },
  {
    period: "Junior Year Spring",
    title: "Preliminary applications begin",
    text: "Students start preliminary applications, track summer seminar options, and keep test scores and activities organized.",
    kind: "universal",
    timelines: ["Universal"]
  },
  {
    period: "Spring Junior Year",
    academy: "Merchant Marine Academy",
    title: "Application usually opens",
    text: "The Merchant Marine Academy application usually opens in spring of junior year.",
    kind: "academy",
    timelines: ["Merchant Marine Academy"]
  },
  {
    period: "Junior Year Summer",
    title: "Pre-candidate phase",
    text: "Contact academy liaison officers, research nomination requirements, and prepare for candidate portals.",
    kind: "universal",
    timelines: ["Universal"]
  },
  {
    period: "July",
    academy: "Air Force Academy",
    title: "Candidate Kit opens",
    text: "The Candidate Kit usually opens in July before senior year for eligible applicants.",
    kind: "academy",
    timelines: ["Air Force Academy"]
  },
  {
    period: "Senior Summer/Early Fall",
    title: "Candidate phase begins",
    text: "Candidate portals open, full applications begin, and students request recommendations.",
    kind: "universal",
    timelines: ["Universal"]
  },
  {
    period: "Around October",
    academy: "Coast Guard Academy",
    title: "Early Action deadline",
    text: "Early Action is usually due around October. The Coast Guard Academy does not require a congressional nomination.",
    kind: "academy",
    timelines: ["Coast Guard Academy"]
  },
  {
    period: "Senior Year Fall",
    title: "Applications, nominations, and interviews",
    text: "Complete congressional nomination applications where required, essays, transcripts, interviews, and CFA preparation.",
    kind: "universal",
    timelines: ["Universal"],
    details: [
      { text: "Most federal service academies require a nomination" },
      { text: "Coast Guard Academy does not require a congressional nomination" },
      { text: "Students should keep ROTC and college backup plans active" }
    ]
  },
  {
    period: "Senior Year Fall/Winter",
    title: "CFA and DoDMERB",
    text: "Complete the Candidate Fitness Assessment and respond quickly to DoDMERB medical qualification follow-up.",
    kind: "universal",
    timelines: ["Universal"]
  },
  {
    period: "Dec 31-Jan 31",
    academy: "Major final deadlines",
    title: "Final application deadlines",
    text: "Several final deadlines fall in winter. These dates are typical and must be verified annually.",
    kind: "academy",
    timelines: ["West Point", "Naval Academy", "Air Force Academy"],
    details: [
      { timeline: "Air Force Academy", text: "Air Force Academy: final application typically Dec 31" },
      { timeline: "West Point", text: "West Point: final application typically Jan 31" },
      { timeline: "Naval Academy", text: "Naval Academy: final application typically Jan 31" }
    ]
  },
  {
    period: "Dec-Mar",
    academy: "Coast Guard Academy",
    title: "Decisions and regular admission",
    text: "Early Action decisions are usually in December, Regular Admission is usually around January, and Regular Admission decisions are usually in March.",
    kind: "notification",
    timelines: ["Coast Guard Academy"]
  },
  {
    period: "Around February",
    academy: "Merchant Marine Academy",
    title: "Final application deadline",
    text: "The final application deadline is typically around February. A congressional nomination is required for most applicants.",
    kind: "academy",
    timelines: ["Merchant Marine Academy"]
  },
  {
    period: "Senior Year Winter",
    title: "Final submissions",
    text: "Finish final submissions, nomination follow-up, medical follow-up, essays, recommendations, and portal updates.",
    kind: "universal",
    timelines: ["Universal"]
  },
  {
    period: "Late Fall-Apr",
    academy: "Appointment windows",
    title: "Appointments begin releasing",
    text: "Appointment windows vary by academy and cycle. Students should keep checking portals and official messages.",
    kind: "notification",
    timelines: ["West Point", "Naval Academy", "Air Force Academy", "Merchant Marine Academy"],
    details: [
      { timeline: "Naval Academy", text: "Naval Academy: usually late fall-Apr" },
      { timeline: "West Point", text: "West Point: usually Jan-Apr, often final notifications by May" },
      { timeline: "Air Force Academy", text: "Air Force Academy: major appointment period usually Feb-Apr" },
      { timeline: "Merchant Marine Academy", text: "Merchant Marine Academy: often Feb-Apr" }
    ]
  },
  {
    period: "Senior Year Spring",
    title: "Accept, decline, and prepare",
    text: "Students receive appointment decisions, accept or decline offers, and prepare for reporting day or basic training.",
    kind: "notification",
    timelines: ["Universal"]
  }
];
