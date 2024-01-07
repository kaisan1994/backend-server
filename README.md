# backend-server
A repository for a backend server

To run the application locally.
1. Create a Mongo DB cluster.
2. Create a **.env** file.
3. Add below fields
- NODE_PORT=4000
- MONGODB_URI=\<mongo_uri>
- MONGODB_DB=Lottery
- DRAW_INTERVAL_SECONDS=30

4. replace \<mongo_uri> with the uri you created in step 1.
5. **npm i** to install require package. **Node version >= 16 is required for this application.
5. Run **npm run start** to start locally.