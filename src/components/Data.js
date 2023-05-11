import movies from '../projects-images-videos/images/movies.png'
import reminderapp from '../projects-images-videos/images/reminderapp.png'
import javaarcade from '../projects-images-videos/images/kingdomino.png'
import histogram from '../projects-images-videos/images/histogram.png'
import threshold from '../projects-images-videos/images/threshold.png'
import randomforest from '../projects-images-videos/images/randomforest.png'


const data = [
    {source: movies,
    desc: "Developed an end-to-end web application featuring a RESTful API leveraging Java Spring Boot and MongoDB Atlas for back-end and react.js for the front-end.",
    git_url : "https://github.com/Alireza-rahnama/movies-back-end-spring-boot-mongod-db"},
    {source: reminderapp,
    desc: "Built a full-stack React.js app to manage tasks from a JSON file. Containerized with Docker and established CI/CD pipelines by GitHub and AWS Amplify.",
    git_url: "https://github.com/Alireza-rahnama/ReminderApp-react-application"},
    {source: javaarcade,
    desc: "Developed an ecommerce application using Designed and implemented 2 Java GUI games:  King Domino & Mind the Gap.",
    git_url: "https://github.com/Alireza-rahnama/Java-Arcade-OOP-Java-Codes-"},
    {source: histogram,
    desc: "Implemented a set of image processing techniques including Histogram, Aggressive Stretch and Equalizer.",
    git_url: "https://github.com/Alireza-rahnama/image-processing-core-java/tree/main/histogram_gui"},
    {source: threshold,
    desc: "Implemented thresholding image processing technique to extract the area of interest in an input image. Hover over image to see demo or github repo.",
    git_url: "https://github.com/Alireza-rahnama/image-processing-core-java/tree/main/threshold_gui"},
    {source: randomforest,
    desc: "Launched and evaluated several data science projects to classify bioinformatics data, label clothing items, and predict automobile pricing using KNN, Random Forest, XGBoost, Lasso, Linear and Logistic Regression, and Tensor Flow models. Hover over image to see demo or github repo.",
    git_url: "https://github.com/Alireza-rahnama/Data-Scienece-Machine-Learning"},
]

export default data