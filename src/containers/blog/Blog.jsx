import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Apr 17, 2024" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Apr 17, 2024" text="Ethical Considerations in AI Development and Deployment" />
        <Article imgUrl={blog03} date="Apr 17, 2024" text="AI and Education: Transforming Learning with Intelligent Systems" />
        <Article imgUrl={blog04} date="Apr 17, 2024" text="AI in Finance: Enhancing Decision Making and Risk Management" />
        <Article imgUrl={blog05} date="Apr 17, 2024" text="The Future of Transportation: Innovations Driven by AI and Automation" />

      </div>
    </div>
  </div>
);

export default Blog;