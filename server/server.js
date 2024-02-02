import './src/config/setLocalEnvironment.js';
import './src/config/connectToDatabase.js';
import express from 'express';
import campgroundsRouter from './src/routes/campgrounds.router.js';
import cors from 'cors';

main().catch((err) => console.log(err));

async function main() {
  const app = express();
  app.use(cors({ origin: true }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/campgrounds', campgroundsRouter);

  app.listen(3000, () => {
    console.log('YelpCamp 2024 serving on port 3000');
  });
}
