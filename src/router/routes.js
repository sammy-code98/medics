const routes = [
  {
    path: "/",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue"), name: "Home" },
    ],
  },
  {
    path: "/account/signup",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Accounts/SignUp.vue"),
        name: "Signup",
      },
    ],
  },
  {
    path: "/account/signin",
    component: () => import("src/layouts/AccountLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Accounts/SignIn.vue"),
        name: "Signin",
      },
    ],
  },
  {
    path: "/dashboard",
    redirect: "/doctor/Gynecologist",
    component: () => import("src/layouts/DashboardLayout.vue"),
    children: [
      {
        path: "/doctor/:speciality",
        component: () => import("pages/Dashboard.vue"),
        name: "Dashboard",
      },
      {
        path: "/doctor/:speciality",
        component: () => import("pages/Doctors/_Index.vue"),
      },
    ],
  },

  {
    path: "/doctor/:speciality/:profile",
    component: () => import("src/layouts/DocprofileLayout.vue"),
    children: [
      {
        path: "/doctor/:speciality/:profile",
        component: () => import("pages/Doctors/_DocProfile.vue"),
        name: "Doctor's Profile",
      },
    ],
  },
  {
    path: "/search",
    component: () => import("src/layouts/SearchLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/SearchResult.vue"),
        name: "Our Doctors",
      },
    ],
  },
  {
    path: "/appointments",
    component: () => import("src/layouts/AppointmentLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Appointment.vue"),
        name: "Appointments",
      },
    ],
  },
  {
    path: "/profile",
    component: () => import("src/layouts/UserprofileLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/UserProfile.vue"),
        name: "My Profile",
      },
    ],
  },
  {
    path: "/chats",
    component: () => import("src/layouts/ChatListLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Chat/ChatList.vue"),
        name: "Medics  Messenger",
      },
    ],
  },

  {
    path: "/chat/:private",
    component: () => import("src/layouts/ChatLayout.vue"),
    children: [
      {
        path: "/chat/:private",
        component: () => import("src/pages/Chat/_Chat.vue"),
      },
    ],
  },
  {
    path: "/voiceCall/:callerId",

    component: () => import("src/layouts/CallLayout.vue"),
    children: [
      {
        path: "/voiceCall/:callerId",
        component: () => import("src/pages/Calls/VoiceCall.vue"),
      },
    ],
  },
  {
    path: "/videoCall/:callerId",

    component: () => import("src/layouts/VideoCallLayout.vue"),
    children: [
      {
        path: "/videoCall/:callerId",
        component: () => import("src/pages/Calls/VideoCall.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
