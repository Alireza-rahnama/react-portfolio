import rutter from '../projects-images-videos/images/rutter.gif'
import vinesight from '../projects-images-videos/images/vinesight.gif'
import movies from '../projects-images-videos/images/movies.png'
import reminderapp from '../projects-images-videos/images/reminderapp.png'
import javaarcade from '../projects-images-videos/images/kingdomino.png'
import histogram from '../projects-images-videos/images/histogram.png'
import shapeDetector from '../projects-images-videos/images/shapeDetector.png'
import threshold from '../projects-images-videos/images/threshold.png'
import randomforest from '../projects-images-videos/images/randomforest.png'
import portfoliov1 from '../projects-images-videos/images/portfoliov1.png'
import portfoliov2 from '../projects-images-videos/images/portfoliov2.png'
import rio from '../projects-images-videos/images/janiro.gif'
import diary from '../projects-images-videos/images/dear-diary.gif'

const data = [
    {
        source: diary,
        name:"Dear Diary",
        desc: ": Developed a cross-platform mobile app allowing users to persist data and perform CRUD operations, filter entries by month, and export entries to pdf file leveraging Dart, Flutter, and Hive. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/flutter-mobile-app-city-explorer"
    },
    {
        source: rio,
        name:"Rio Travel Advisor",
        desc: ": Developed a cross-platform mobile app leveraging Dart, flutter, and android studio. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/flutter-mobile-app-city-explorer"
    },
    {
        source: movies,
        name:"Movies APP",
        desc: ": Deployed an end-to-end web app utilizing MVC design pattern, featuring a RESTful API leveraging Java Spring Boot, MongoDB Atlas, react.js, Docker, AWS ECS, and AWS CloudWatch. Hover over image to checkout the github repo. ",
        git_url: "https://github.com/Alireza-rahnama/movies-back-end-spring-boot-mongod-db"
    },
    {
        source: rutter,
        name:"Azure Cloud Infrastructure Benchmarking Application",
        desc: ": Architected a multithread application to emulate Rutter Inc.’s radar systems and Sigma S6 software suite, analyzed the Azure Container Instances performance to improve system efficiency using Java, C#, Maven, MongoDB, gRPC, Protobuf. ",
        git_url: "https://github.com/Alireza-rahnama/benchmarking_final_product"
    },
    {
        source: javaarcade,
        name:"Java Arcade",
        desc:": Designed and implemented 2 Java GUI games:  King Domino & Mind the Gap. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/Java-Arcade-OOP-Java-Codes-"
    },
    {
        source: vinesight,
        name:"VineSight",
        desc: ": Created a wine recommendation system using C#, .NET, and MongoDB; Integrated web scraping via Google Custom Search API to populate the database with wine bottle image URLs. The app provides insight on top rated wines based on different cahracteristics, type, and name.",
        git_url: "https://github.com/Alireza-rahnama/c-sharp-practice"
    },
    {
        source: reminderapp,
        name:"Reminder App",
        desc: ": Developed a full-stack React.js app to manage tasks from a JSON file. Containerized with Docker and established CI/CD pipelines via GitHub and AWS Amplify. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/ReminderApp-react-application"
    },
    {
        source: histogram,
        name:"Pixel Wizard",
        desc: ": Implemented a set of image processing techniques including Histogram, Aggressive Stretch and Equalizer via core Java. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/image-processing-core-java/tree/main/histogram_gui"
    },
    {
        source: threshold,
        name:"Threshold Vision",
        desc: ": Implemented thresholding image processing technique to extract the area of interest in an input image via core Java. Hover over image to see demo or github repo. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/image-processing-core-java/tree/main/threshold_gui"
    },
    {
        source: shapeDetector,
        name:"Shape Detector",
        desc: ": Implemented Hough Transform to detect simple shapes such as circles and lines in an input image via core Java. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/image-processing-core-java/tree/main/threshold_gui"
    },
    {
        source: randomforest,
        name:"Data Science/ Machine Learning projects",
        desc: ": Launched and evaluated several data science projects to classify bioinformatics data, label clothing items, and predict automobile pricing using KNN, Random Forest, XGBoost, Lasso, Linear and Logistic Regression, and Tensor Flow models. Hover over image to checkout the github repo.",
        git_url: "https://github.com/Alireza-rahnama/Data-Scienece-Machine-Learning"
    },
    {
        source: portfoliov1,
        name:"Legacy Portfolio",
        desc: ": Launched a portfolio website featuring a responsive design and integration with Twitter's Rest API using Vanilla JavaScript, HTML, CSS, Node.js, jQuery, and Bootstrap.",
        git_url: "https://github.com/Alireza-rahnama/Alireza-rahnama.github.io",
        url:"https://alireza-rahnama.github.io"
    },
    {
        source: portfoliov2,
        name:"React Portfolio",
        desc: ": Developed a responsive react based portfolio leveraging tailwindcss, deployed on AWS Amplify and hosted on a third part Domain service provider. Hover over image to checkout the github repo. ",
        git_url: "https://github.com/Alireza-rahnama/react-portfolio"
    },
]

export default data
