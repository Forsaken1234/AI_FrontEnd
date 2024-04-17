import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
        <Feature title="AI Chatbots" text="Experience the power of AI-driven chatbots, revolutionizing communication and customer support. Enhance user experience and streamline interactions with intelligent conversational agents." />
        <Feature title="Knowledge Management Systems" text="Unlock the potential of knowledge management systems powered by AI. Organize information, facilitate collaboration, and empower teams to access insights effortlessly." />
        <Feature title="AI in Education" text="Discover the impact of AI on education, reshaping learning experiences and personalized instruction. Leverage adaptive learning technologies and virtual assistants to enhance student outcomes." />
    </div>
  </div>
);

export default WhatGPT3;