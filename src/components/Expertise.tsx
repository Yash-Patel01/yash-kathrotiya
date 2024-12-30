import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Django",
    "Python",
    "SQL",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
];

const labelsThird = [
    "EC2",
    "S3",
    "Lambda",
    "RDS",
    "CloudFront",
    "DynamoDB",
    "ECS",
    "EKS",
    "SNS",
    "SQS",
    "API Gateway",
    "CloudFormation",
    "IAM",
    "Athena",
    "Kinesis",
    "Glue",
    "Redshift",
    "Step Functions",
    "CodePipeline",
    "CloudWatch"
];
    

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have developed and deployed scalable web applications using frameworks like Django and Express. I possess strong expertise in full-stack development, API integration, and cloud infrastructure, ensuring seamless project execution from concept to completion.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>After building applications, I assist clients with implementing DevOps practices, configuring CI/CD pipelines, and automating deployments to ensure smooth and efficient Go-Live processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AWS</h3>
                    <p>Stay competitive by utilizing the latest AWS services in your projects. I have professional experience designing and deploying scalable, secure, and cost-effective cloud solutions on AWS to drive business growth and operational efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;