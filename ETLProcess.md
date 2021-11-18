# My ETL Process
- While learning how to design a postgres schema I stumbled across pgAdmin and found that you can design the schema in pgAdmin, so that is where I designed my schema
  - I learned you can do quite a lot from pgAdmin that would make my life easier but I wanted to make sure I understood how to do it using Sequelize as well.
- I set up sequalize so that I could read the csv files, convert them to javascript object using csv-parser, and then add each object to the database.
  - Because there is such a large amount of data I ran into issues with running out of memory so I was not able to use this method for all of my db.
- I ran out of time to seed my databases with Sequelize so I turned to seeding the database with pgAdmin.