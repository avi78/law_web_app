import React from "react";
import "./Articles.css";

const Articles = () => {
  const contentsArticles = [
    {
      imgLink: "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/7/13/w900X450/THE_MANYfc.jpg?w=900&dpr=1.0",
      name: "Constitutional Of Meat Ban",
      date: "Mar 6,2023 Constitution Sneha Singh|Case Studies/Briefs|Abhidhvaj Law Journal",
      desc: "The Constitution labels the country: “India that is Bharat” which shows a considerable degree of confusion in the minds of the drafters. They were unable to decide on the name of the country itself and therefore left it hanging in the air.",
      time: "3 Minutes",
      link: "https://www.newindianexpress.com/opinions/2019/jul/13/the-many--confusions-in-constitution-2003101.html"
    },{
      imgLink: "https://img.etimg.com/thumb/msid-70636775,width-650,height-488,imgsize-551826,,resizemode-75/constitution.jpg",
      name: "Case Note On Enrica Lexi Case",
      date: "Oct 16,2021 Constitution Sneha Singh|Case Studies/Briefs|Abhidhvaj Law Journal",
      desc: "The Constitution labels the country: “Communicating recent history via cinema is evidently the hottest genre on the block, given that the hugely successful Uri earlier this year will be followed by the release of Batla House this week, with Pulwama, Surgical Strike 2.0 and Balakot reportedly in the pipeline.",
      time: "3 Minutes",
      link: "https://economictimes.indiatimes.com/magazines/panache/constitution-of-india-the-movies/articleshow/70636750.cms?from=mdr"
    },{
      imgLink: "https://bri-wp-images.s3.amazonaws.com/wp-content/uploads/Constitution-and-quill-cta.jpg",
      name: "Case Analysis:Tagore v. Tagore",
      date: "Apr 5,2022 Constitution Sneha Singh|Case Studies/Briefs|Abhidhvaj Law Journal",
      desc: "The House of Representatives shall be composed of members chosen every second year by the people of the several states, and the electors in each state shall have the qualifications requisite for electors of the most numerous branch of the state legislature.",
      time: "3 Minutes",
      link: "https://billofrightsinstitute.org/primary-sources/constitution"
    }
    
  ];
  return (
    <div className="articles_main_div">
      <input
        type="text"
        placeholder="Search Articles..."
        className="searchBox"
      />
      {
        contentsArticles.map((data,i)=>
        <div key={i} className="article_container">
        <div className="poster_box">
          <img className="Poster_style" src={data.imgLink} alt="Poster" />
        </div>
        <div className="text_box">
          <h2 style={{color: "blue"}}>{data.name}</h2>
          <p>{data.date}</p>
          <h4 style={{color: "gray"}}>{data.desc}</h4>
          <h5>{data.time}</h5>
          <a href={data.link}>
            <p style={{ textDecoration: "underline", color: "blue" }}>
            View Full Article
            </p>
          </a>
        </div>
      </div>
        )
      }
      
    </div>
  );
};

export default Articles;
