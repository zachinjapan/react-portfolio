import "./Projects.css";
import quote from "../../images/projects/quote.png";
import blog from "../../images/projects/blog.png";
import weather from "../../images/projects/weather.png";
import nokatakana from "../../images/projects/nokatakana.png";
import comedyshow from "../../images/projects/comedyshow.png";
import castles from "../../images/work/castles.png";
import MUIProjectCard from "./ProjectCard/MUIProjectCard";

const Projects = (props) => {
  let content = {
    English: {
      mainTitle: "Projects",
      projects: [
        {
          title: "Quote Quiz",
          description:
            "Quiz your knowledge of famous quotes and share your favorite quotes on twitter.",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/quotes",
          tech: "Tech",
          tags: ["React", "Redux", "API", "Netlify"],
          tech_description:
            "My first project using redux and my only group project.  My friend Clifford Morin coded the styling and I did the functionality.  A joke api pulls the quotes which are then .map()'ed to buttons. The buttons themselves check if the user was correct and redux is used to tell when the round is over.",
          callToAction: "More Info",
        },
        {
          title: "Do I Need A Jacket?",
          description:
            "View the current live weather and determine if need to  wear a jacket and more.",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tech: "Tech",
          tags: ["API", "Node/Express", "Heroku"],
          tech_description:
            "This project has a backend as a server.js file. The data is pulled from an open weather api and sent to the backend and then retrived back from the front end. The Washngton Post did a study on what the average temperature is for each type of clothing. That data is then used to determine if you need a jacket or not.",
          callToAction: "More Info",
        },
        {
          title: "No Katakana Game",
          description:
            "Explain the word on the screen without using any katakana (foreign loan words)",
          image: nokatakana,
          link: "https://zachinjapan.github.io/no-katakana-game/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/nokatakana",
          tech: "Tech",
          tags: ["React", "Typescript", "Github Pages"],
          tech_description:
            "I used Typescript and React for the first time. This app is a simple two-player game where the user sees the word and explains it without using foreign words like coffee.",
          callToAction: "More Info",
        },
        {
          title: "Castles In The Sky",
          description:
            "Have a big event coming up? Book this professional rock band located in New Jersey,America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          linkText: "Live Demo",
          github: "",
          tech: "Tech",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
          tech_description:
            "A vanilla Javascript website using sass for styling and a lot of bootstrap.",
          callToAction: "More Info",
        },
        {
          title: "Web Developer in Japan",
          description: "Tead about about my life and projects.",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "Tech",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
          tech_description:
            "I use this blog to learn how to use Gatsby and practice using markdown.",
          callToAction: "More Info",
        },
        {
          title: "_C32F's Comedy Show",
          description:
            "Need a good laugh? Come check out this new up and coming robot comedian.",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/comedy_show",
          tech: "Tech",
          tags: ["Sass", "JavaScript", "API", "Github Pages"],
          tech_description:
            "At the push of a button, the user can change the topic, play background music and rename the robot.　The topic buttons change the api url call.",
          callToAction: "More Info",
        },
      ],
    },
    Japanese: {
      mainTitle: "プロジェクト",
      projects: [
        {
          title: "引用クイズ",
          description:
            "名家の引用を使用し、インタラクティブなゲームをやってみてください。",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/quotes",
          tech: "技術",
          tags: ["React", "Redux", "API", "Netlify"],
          tech_description:
            "reduxを使うのは初めてでした。 ポートフォリオでの私の唯一のグループプロジェクトです。 友人のクリフォード・モーリンさんが外観をコーディングし、私が機能を実行しました。 ジョークAPIは引用符をゲットして、引用符はボタンに.map（）されます。 ボタンがユーザーが正しいかどうかをチェックし、reduxを使用してラウンドが終了したことを通知します。",
          callToAction: "詳しい情報",
        },
        {
          title: "ジャケットが必要ですか？",
          description:
            "郵便番号を使用して、現在の天気を表示し、ユーザーさんがジャケットを必要とするかどうかを判断します。",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          linkText: "ウエブサイト",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tech: "技術",
          tags: ["API", "Node/Express", "Heroku"],
          tech_description:
            "このプロジェクトはサーバーのバックエンドもあります。データはオープンウェアAPIから取得し、バックエンドからフロントエンドに戻ってきます。 Washington Post というサイトはジャケット　に必要な平均気温を研究しました。 その情報を使って、どんなアウターが必要かをお勧めします",
          callToAction: "詳しい情報",
        },
        {
          title: "ノカタカナゲーム",
          description: "外来語を使用せずに、言葉を接目するのゲーム。",
          image: nokatakana,
          link: "https://zachinjapan.github.io/no-katakana-game/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/no-katakana-game",
          tech: "技術",
          tags: ["React", "Typescript", "Github Pages"],
          tech_description:
            "初めてTypescriptとReactを使用しました。 このアプリは、ユーザーに単語が表示され、コーヒーのような外来語を使用せずに説明するの単純な2人用ゲームです。",
          callToAction: "詳しい情報",
        },
        {
          title: "カーサルズ・イン・ザー・スカイ",
          description: "アメリカのバンドのウェブサイトです。",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          linkText: "ウェブサイト",
          github: "",
          tech: "技術",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
          tech_description:
            "スタイリングにsassを使用し、多くのブートストラップを使用するバニラJavascriptのサイトです。",
          callToAction: "詳しい情報",
        },
        {
          title: "日本でウェブ開発者になるの旅",
          description: "私の日常生活やプロジェクトについてブログです。",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "技術",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
          tech_description:
            "このブログを使用して、Gatsby.jsの使用方法を学び、マークダウンを書き方を練習しています。",
          callToAction: "詳しい情報",
        },
        {
          title: "_C32Fのコメディショー",
          description: "_C32Fくんのコメディショーです。",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/comedy_show",
          tech: "技術",
          tags: ["Sass", "JavaScript", "API", "Github Pages"],
          tech_description:
            "ジョークアプリです。ユーザーがボタンを押すことで、トピックを変更し、背景音楽を再生し、ロボットの名前を変更することができます。",
          callToAction: "詳しい情報",
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="Projects">
      <h1>{content.mainTitle}</h1>
      <div className="projects-container">
        <MUIProjectCard
          title={content.projects[0].title}
          description={content.projects[0].description}
          image={content.projects[0].image}
          link={content.projects[0].link}
          linkText={content.projects[0].linkText}
          github={content.projects[0].github}
          tags={content.projects[0].tags}
          tech={content.projects[0].tech}
          tech_description={content.projects[0].tech_description}
          callToAction={content.projects[0].callToAction}
        />
        <MUIProjectCard
          title={content.projects[1].title}
          description={content.projects[1].description}
          image={content.projects[1].image}
          link={content.projects[1].link}
          linkText={content.projects[1].linkText}
          github={content.projects[1].github}
          tags={content.projects[1].tags}
          tech={content.projects[1].tech}
          tech_description={content.projects[1].tech_description}
          callToAction={content.projects[1].callToAction}
        />
        <MUIProjectCard
          title={content.projects[2].title}
          description={content.projects[2].description}
          image={content.projects[2].image}
          link={content.projects[2].link}
          linkText={content.projects[2].linkText}
          github={content.projects[2].github}
          tags={content.projects[2].tags}
          tech={content.projects[2].tech}
          tech_description={content.projects[2].tech_description}
          callToAction={content.projects[2].callToAction}
        />
        <MUIProjectCard
          title={content.projects[3].title}
          description={content.projects[3].description}
          image={content.projects[3].image}
          link={content.projects[3].link}
          linkText={content.projects[3].linkText}
          github={content.projects[3].github}
          tags={content.projects[3].tags}
          tech={content.projects[3].tech}
          tech_description={content.projects[3].tech_description}
          callToAction={content.projects[3].callToAction}
        />
        <MUIProjectCard
          title={content.projects[4].title}
          description={content.projects[4].description}
          image={content.projects[4].image}
          link={content.projects[4].link}
          linkText={content.projects[4].linkText}
          github={content.projects[4].github}
          tags={content.projects[4].tags}
          tech={content.projects[4].tech}
          tech_description={content.projects[4].tech_description}
          callToAction={content.projects[4].callToAction}
        />
        <MUIProjectCard
          title={content.projects[5].title}
          description={content.projects[5].description}
          image={content.projects[5].image}
          link={content.projects[5].link}
          linkText={content.projects[5].linkText}
          github={content.projects[5].github}
          tags={content.projects[5].tags}
          tech={content.projects[5].tech}
          tech_description={content.projects[5].tech_description}
          callToAction={content.projects[5].callToAction}
        />
      </div>
    </div>
  );
};

export default Projects;
