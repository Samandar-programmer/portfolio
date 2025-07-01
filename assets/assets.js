import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
//import web_icon from './web-icon.png';
//import mobile_icon from './mobile-icon.png';
//import ui_icon from './ui-icon.png';
//import graphics_icon from './graphics-icon.png';
import clean from './clean.png';
import clean_dark from './clean_dark.png';
import coding from './coding.png';
import coding_dark from './coding_dark.png';
import responsive from './responsive.png';
import responsive_dark from './responsive_dark.png';
import speedometer from './speedometer.png';
import speedometer_dark from './speedometer_dark.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './work-1.png';
import work2 from './work-2.png';
import work3 from './work-3.png';
import work4 from './work-4.png';
import footer_bg_color from './footer-bg-color.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    /* web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon, */
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    work1,
    work2,
    work3,
    work4,
    footer_bg_color,
    responsive,
    responsive_dark,
    clean,
    clean_dark,
    coding,
    coding_dark,
    speedometer,
    speedometer_dark,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: work1,
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: work2,
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: work3,
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: work4,
    },
]

export const serviceData = [
    { icon: assets.responsive, iconDark: assets.responsive_dark, title: 'Responsive Web Design', description: 'I build websites that look and work great on all screen sizes — from mobile to desktop. Clean, modern, and user-focused design is my priority.', link: '' },
    { icon: assets.speedometer, iconDark: assets.speedometer_dark, title: 'High Performance', description: 'Fast-loading pages are essential. I optimize every detail — from code to assets — to ensure smooth and speedy user experiences.', link: '' },
    { icon: assets.coding, iconDark: assets.coding_dark, title: 'UI Development', description: 'I convert Figma, Adobe XD, or Sketch designs into pixel-perfect, fully functional websites using HTML, CSS, JavaScript, and frameworks like React.', link: '' },
    { icon: assets.clean, iconDark: assets.clean_dark, title: 'Clean Code', description: 'I write clean, scalable, and well-documented code following best practices. Easy to read, easy to maintain, and ready for future updates.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];