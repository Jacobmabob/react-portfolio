import React from 'react';
import Card from '../Card';
import { CardContainer } from '../styles/card-styles/CardContainer';

export default function Work() {
  return (
    <>
    <h1>Projects.</h1>
    <CardContainer>
      <Card 
        project_title="Flasher"
        tags="Node / Express / MySql / TailwindCSS" 
        description="Flasher is a full-stack web application that serves as a flashcard study companion for Bootcamp students. Flasher allows the user to navigate through decks of flashcards pertaining to their current area of study all the way from basic HTML to the popular Javascript library React."  
      />
      <Card 
        project_title="Social Network API"
        tags="Node / Express / MongoDB" 
        description="This project is a backend API for a social networking site. The objective was to familiarize myself with the world of NoSql, using MongoDB and the Mongoose ODM. The application tier was created with Node.js and Express.js. API routes tested with Insomnia."  
      />
      <Card 
        project_title="Tech Blog"
        tags="Node / Express / MySql / TailwindCSS" 
        description="This project is a CMS style blog site. It is a Full-stack CRUD application following MVC design architecture and features User authentication. Users are able to create an account, enabling them to create/update/delete their own blog posts and leave comments on posts created by others."  
      />
      <Card 
        project_title="Weather Dashboard"
        tags="HTML / JavaScript / Bootstrap" 
        description="This project is a real-time weather dashboard application built with Bootstrap and the OpenWeather API. The app displays the date, weather conditions and a visiual representation of the conditions for the current day of a specified city, as well as a 5-day forecast."  
        live_link="https://flasherquiz.herokuapp.com/"
        github_url="https://github.com/beattygraphics/Group-Project-2"
      />
      <Card 
        tags="Node / Express / MySql" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus varius libero ut sollicitudin. Suspendisse sit amet massa non purus scelerisque tincidunt et ac ipsum. Maecenas a posuere velit, id hendrerit neque."  
      />
      <Card 
        tags="Node / Express / MySql" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus varius libero ut sollicitudin. Suspendisse sit amet massa non purus scelerisque tincidunt et ac ipsum. Maecenas a posuere velit, id hendrerit neque."  
      />

    </CardContainer>
    </>
  );
}
