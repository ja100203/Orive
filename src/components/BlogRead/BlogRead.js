import * as React from "react";
import "./BlogRead.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import handshake from "../../assets/images/Rectangle 10.png";
import TextField from "@mui/material/TextField"
import DialogContent from "@mui/material/DialogContent";
import "@mui/material/styles";
import Journal from "../../pages/Journal/Journal";

const BlogRead = () => {
  return (
      <div>
      <Journal/>
      <div className="blog-read-content">
        <div className="card blog-content-card">
          <div className="card-body">
            <p className="card-text">
              Machine learning (ML) isn’t new. However, the field of big data is
              revitalizing the subject and more organizations are relying on ML
              models to scale their operations, support staff in working better
              and faster, to uncover hidden insights from data, or even confirm
              and challenge underlying assumptions. This is creating widespread
              interest in related topics with the C-suite, and across business
              lines and job roles, as enterprises embrace the value of
              artificial intelligence (AI) and ML. To make a disruptive
              organizational impact, AI and ML need to be understood and
              trusted. By consulting these ML blogs from authoritative
              individuals and organizations that satisfy different skill levels,
              readers can increase their understanding and comfort level in
              these areas, get pressing questions answered, and connect with
              others who have experience using them to great benefit.
            </p>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              1. OpenAI
            </h6>
            <p className="card-text">
              OpenAI comes from industry experts who want to bring AI to the
              masses. It's linked to the non-profit research company OpenAI,
              co-chaired by Elon Musk and Sam Altman, and sponsored by companies
              such as Amazon Web Services, Microsoft, and Infosys who are trying
              to make AI accessible—hence the name. Contributors discuss their
              collective efforts to promote and advance AI technologies through
              long-term research. It’s a valuable resource for anyone interested
              in the future of AI.
            </p>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              2. Distill
            </h6>
            <p className="card-text">
              Managed by: Shan Carter, Chris Olah, and Arvind Satyanarayan
              Distill concentrates on making ML and AI more accessible for
              readers. Traditional research can be difficult to consume, so
              Distill communicates ML research in appealing, interactive data
              visualizations. It acts as a neutral platform for multiple authors
              to publish together, and articles are peer-reviewed, appearing in
              Google Scholar. Distill is also registered with the Library of
              Congress and CrossRef.
            </p>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              3. Machine Learning is fun
            </h6>
            <p className="card-text">
              Authored by: Adam Geitgey Machine Learning is Fun is a valuable,
              introductory blog. It covers the tenets of ML through interactive
              tutorials and practical examples, which make it easier to see the
              useful applications to different businesses and industries. Author
              Adam Geitgey is a former software developer who now consults
              organizations on implementing machine learning. He believes ML is
              integral to the future of software and that developers should have
              a strong working knowledge, so he provides guides and techniques
              to help them develop and grow.
            </p>
            <div className="img-blog-div">
              <img src={handshake} alt="" className="blog-read-img" />
            </div>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              4. Machine Learning Mastery
            </h6>
            <p className="card-text">
              Authored by: Jason Brownlee A machine learning developer with
              several AI-related degrees, Jason intended his Machine Learning
              Mastery blog for new developers getting started in the field. He
              was once an amateur developer and wants to help others, imparting
              lessons learned during his professional journey and sharing the
              tools that helped him most. The blog, plus his email course and
              newsletter, accommodate any level of expertise.
            </p>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              5. FastML
            </h6>
            <p className="card-text">
              Managed by: Zygmunt Zając FastML tackles interesting topics in
              machine learning with entertaining, easy to consume posts. It’s
              run by economist Zygmunt Zając, and is a go-to ML platform,
              tackling topics like overfitting, pointer networks, and chatbots,
              among others. If you’re frustrated by some of the existing ML
              papers that feel like you need a PhD in math to understand them,
              bookmark this blog.
            </p>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              6. AWS Machine Learning Blog
            </h6>
            <p className="card-text">
              Amazon is heavily involved in ML, using algorithms in nearly all
              areas of its business to create leads. Algorithms suggest relevant
              products for customers in search results, recommend products based
              on recent purchases, and optimize faster product distribution and
              shipping from warehouses to customers. The blog features projects
              and guides that reveal industry strides to readers and covers ML
              uses in Amazon Web Services technology.
            </p>
          </div>
        </div>
        <div className="form-part" style={{overflowX:'hidden'}}>
          <DialogContent style={{overflowX:'hidden'}}>
            <form action="" className="form-blog">
              <h4 className="need-help">Need Help with Development?</h4>

              <TextField
                margin="dense"
                placeholder="Enter your name"
                type="text"
                fullWidth
                name="name"
                id="name"
                required
              />
              <TextField
                margin="dense"
                placeholder="Email address"
                type="email"
                fullWidth
                name="email"
                id="email"
                required
              />
              <TextField
              placeholder="Select service"
                margin="dense"
                type="text"
                select
                fullWidth
                name="employeeName"
                id="employeeName"
                required
                defaultValue="Select Service"
              >
                <option value="" label="Select Service">Select Service</option>
              </TextField>
              <textarea style={{width:'100%', borderRadius:'5px', padding:'10px 0 0 10px', border:'1px solid rgba(204, 204, 204, 1)'}} name="" id="" cols="30" rows="7" placeholder="Message"></textarea>
              <button className="submit-blog-read">Submit</button>
            </form>
          </DialogContent>
        </div>
      </div>
    </div>
  );
};

export default BlogRead;
