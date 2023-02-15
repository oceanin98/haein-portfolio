import {
    ArrowForward,
    AddLocationAltOutlined,
    PhoneIphone,
    EmailOutlined,
    AccountCircle
} from "@mui/icons-material"


export const navlink = [{
        url: "/",
        text: "Home",
    },
    {
        url: "/about",
        text: "About",
    },
    {
        url: "/skills",
        text: "Skills",
    },
    {
        url: "/portfolio",
        text: "Portfolio",
    },


    {
        url: "/contact",
        text: "Contact",
    },
]
export const home = [{
    text: "Welcome to my portfolio",
    name: "Haein Lee",
    post: "WEB FE Developer",
    design: "UI / UX DESIGNER",
    desc: "산업공학을 전공하고 컴퓨터 프로그래밍에 관심이 생겨 카이스트에서 진행하는 SW Jungle을 수료한 이해인 이라고 합니다. Grap-It이라는 중등 수학 교육 플랫폼을 팀원들과 함께 협업하여 기획/개발/배포 한 경험이 있고 Pintos-os 과제를 통해 cs 지식을 습득하였습니다.  도전하는 것을 좋아하고 습득력이 빨라 새로운 언어를 빠르게 익힐 수 있고 비효율적인 프로세스를 개선하고 이용자가 더 편하게 Ui/Ux를 개선한 경험이 있습니다.",
}, ]
export const about = [{
    desc: "React를 사용하는 FrontEnd 중심의 자바스크립트 개발경험",
    desc1: "Pintos os 를 통해 운영체제와 cs 지식 학습 경험",
    desc2: "다양한 라이브러리 사용 경험",
    image: "./images/haein-photo.png",
}, ]

export const project = [{
        id: 1,
        step: "Basic",
        icon: < ArrowForward / > ,
        num: "1",
        title: "관련 지식이나 경험에 매우 제한적이며 기본적인 업무 수행에도 상당한 도움이 필요한 수준. 업무 관련 꾸준한 학습이 필요함. ",
    },
    {
        id: 2,
        step: "Demonstrating",
        icon: < ArrowForward / > ,
        num: "2",
        title: "매우 능숙하진 않으나 경험이 있고, 기본적인 업무 수행이 가능한 수준. 업무 수행을 위해 추가적인 학습이나 타인의 도움이 필요할 수 있음.",
    },
    {
        id: 3,
        step: "Proficient",
        icon: < ArrowForward / > ,
        num: "3",
        title: "관련 지식과 경험이 풍부한 편이며 능숙하게 업무 가능한 수준. 업무 수행에 특별한 도움이 필요 없음.",
    },

]
export const portfolio = [{
        id: 1,
        cover: "../images/port/s1.png",
        category: "개발",
        title: "22022.12 - 2023.01",
        url: "https://github.com/oceanin98/GrapIt",

    },
    {
        id: 2,
        cover: "../images/port/s2.png",
        category: "Study",
        title: "2022.11 - 2022.12",
        url: "https://github.com/oceanin98/pintos-kaist"
    },
    {
        id: 3,
        cover: "../images/port/s3.png",
        category: "개발",
        title: "2022.9",
        url: "https://velog.io/@oceain2088/SW-jungleWeek-00",
    },
    {
        id: 4,
        cover: "../images/port/s4.png",
        category: "Study",
        title: "2020.09",
        url: "https://circuitdigest.com/microcontroller-projects/age-and-gender-classification-using-opencv-and-deep-learning-on-raspberry-pi"
    },

]
export const skills = [{
        id: 1,
        text: "HTML(3) CSS(3) javaScript ES5 ES6+(2) C(1) python(2)",
        name: "SKILLS",
        post: "Language",
    },
    {
        id: 2,
        text: "React(2) jQuery(2)",
        name: "SKILLS",
        post: "Framework + Library",
    },
    {
        id: 3,
        text: "MySQL(2) MongoDB(2) Robo3T(2)",
        name: "SKILLS",
        post: "Database",
    },
    {
        id: 4,
        text: "Git(2) Slack(3) Notion(3) Visual Studio Code(3) Anaconda-Navigator(2)",
        name: "SKILLS",
        post: "Develope Tool & ETC",
    },

]
export const blog = [{
        id: 1,
        title: "그래프 및 도형 시각화를 제공하는 화상과외 서비스",
        date: "주요기능: 선생님 찾기/화상과외(OpenVIDU)/2D그래프/3D도형/화이트보드",
        desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
        cover: "./images/blog/b1.png",
    },

]
export const contact = [{
        icon: < AddLocationAltOutlined / > ,
        text1: "서울특별시 강북구 솔샘로 174",

    },
    {
        icon: < PhoneIphone / > ,
        text1: "010-6455-7115",

    },
    {
        icon: < EmailOutlined / > ,
        text1: "oceanin2088@gmail.com",

    },
    {
        icon: < AccountCircle / > ,
        text1: "이해인/Hailey",

    },
]