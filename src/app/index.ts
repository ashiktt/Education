
// Define the type for a single slider item
type SliderItem = {
  image: string;
  heading: string;
  description: string;
};

export enum ServiceRecommendation {
  RECOMMENDED = "RECOMMENDED",
  POPULAR = "POPULAR",
  NEW = "NEW",
}

export interface CloudinaryResult {
  event?: string;
  info?: {
    secure_url: string;
  };
}


// testimonial

export interface CreateTestimonial {
  image: string;
  name: string;
  role: string;
  text: string;
  rating: number;
};

export interface TestimonialProp extends CreateTestimonial {
  id: string
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phoneNumber: string;
  course: string;
}

export interface CreateAppointmentFormData extends AppointmentFormData {
  id: string;
  isCompleted: boolean;
}

// our service 
export interface ServiceData extends CreateServiceData {
  id: string
}

export interface CreateServiceData {
  authorName: string;
  bannerImg: string;
  courseName: string;
  authorImg: string;
  totalAdmission: string;
  semesterCost: string;
  universityName: string;
  tag: string;
  duration: string;
  level: string;
  recommendation: ServiceRecommendation;
  semester: string;
  description: string;
}

// For creating a new appointment (from user/admin form)
export interface CreateAppointment {
  name: string
  email: string
  phoneNumber: string
  coursesid: string
  complite: boolean
}

// Complete Appointment object with ID
export interface Appointment extends CreateAppointment {
  id: string;
}


// Define the props for the Slider component
export type SliderProps = {
  slider?: SliderItem[];
  perView: number;
  testimonial?: TestimonialProp[]
};

// use data
export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  age?: number;
  gender?: string;
  location?: {
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
  };
  profileImage?: string;
}


export interface CreateTeamMemberProp {
  img: string;
  name: string;
  role: string;
}

// Our team member
export interface TeamMemberProp extends CreateTeamMemberProp {
  id: string;
}