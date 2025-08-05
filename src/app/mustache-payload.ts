interface IAttendance {
  label: string;
  value: number;
}

interface IPermission {
  label: string;
  hours: number;
  minutes: number;
}

interface IStarRating {
  role: string;
  email: string;
  rating: number;
}

interface IJobWork {
  total: number;
  formattedTime: string;
  formattedTakenTime: string;
}

interface IQualityMeter {
  label: string;
  value: number;
  color1: string;
}

interface IReviewMetric {
  name: string;
  rating: number;
  person1: number;
  person2: number;
}

interface IManagementSummary {
  totalAssigned: number;
  totalCompleted: number;
  totalRework: number;
  totalInProgress: number;
  totalEstimatedTime: number;
  totalTimeTaken: number;
  efficiency: string;
  overallQuality: string;
  starRatings: IStarRating[];
}

export interface IMustachePayload {
  name: string;
  companyName: string;
  email: string;
  contactNumber: string;
  address: string;
  gstNumber: string;
  workingDuration: string;
  image: string;
  presentDays: number;
  absentDays: number;
  leaveDays: number;
  permissionHours: string;
  wfhHours: string;

  attendanceSummary: IAttendance[];
  leaveSummary: IAttendance[];
  permissionSummary: IPermission[];
  wfhPermissionSummary: IPermission[];

  wfhDateCountLength: number;
  wfhTotalJobWorkIds: number;

  managementSummary: IManagementSummary;
  jobWork: IJobWork;
  qualityMeterData: IQualityMeter[];
  reviewMetrics: IReviewMetric[];
  averageRate: number;
  overallReview: string;
}


export const mustachePayload: IMustachePayload = {
  name: 'Kavi',
  companyName: 'Vyasaka',
  email: 'kavi@gmail.com',
  contactNumber: '1234567890',
  address: '123 Main St, City',
  gstNumber: '123456',
  workingDuration: '1 years',
  image: 'assets/img/brand/image2.webp',
  presentDays: 220,
  absentDays: 5,
  leaveDays: 10,
  permissionHours: '2 hr 30 min',
  wfhHours: '5 hr 45 min',

  attendanceSummary: [
    { label: 'Present', value: 220 },
    { label: 'Absent', value: 5 }
  ],
  leaveSummary: [
    { label: 'Leave Days', value: 10 }
  ],
  permissionSummary: [
    { label: 'Permission Hours', hours: 2, minutes: 30 }
  ],
  wfhPermissionSummary: [
    { label: 'WFH Hours', hours: 5, minutes: 45 }
  ],

  wfhDateCountLength: 12,
  wfhTotalJobWorkIds: 7,

  managementSummary: {
    totalAssigned: 50,
    totalCompleted: 45,
    totalRework: 3,
    totalInProgress: 2,
    totalEstimatedTime: 1200,
    totalTimeTaken: 1100,
    efficiency: '92%',
    overallQuality: '95%',
    starRatings: [
      { role: 'Manager', email: 'manager@example.com', rating: 4.5 }
    ]
  },

  jobWork: {
    total: 50,
    formattedTime: '20h 30m',
    formattedTakenTime: '18h 45m'
  },

  qualityMeterData: [
    { label: 'Accuracy', value: 85, color1: '#4caf50' },
    { label: 'Speed', value: 75, color1: '#2196f3' }
  ],

  reviewMetrics: [
    { name: 'Quality', rating: 4, person1: 5, person2: 4 },
    { name: 'Speed', rating: 3, person1: 4, person2: 3 }
  ],

  averageRate: 4.1,
  overallReview: 'Excellent performance overall with good efficiency and minimal rework.'
};
