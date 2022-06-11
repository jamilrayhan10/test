import React, { useState } from "react";
import Modal from "react-modal";
import blogs from "../../blogs";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
          >
            <article className="post-container" onClick={toggleModal}>
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <img src={item.img} className="img-fluid" alt="item.title" />
                </div>
              </div>
              {/* End .thumb */}
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item.description1.slice(0, 100)}</p>
                </div>
              </div>
              {/* End .post-content */}
            </article>

            {/* Start ModalOneBlogContent */}
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
            >
              <div>
                <button className="close-modal" onClick={toggleModal}>
                  <img src="/img/cancel.svg" alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner blog-post">
                  {/* Article Starts */}
                  <article>
                    <div className="title-section text-left text-sm-center">
                      <h1>
                        Post <span>Details</span>
                      </h1>
                      <span className="title-bg">posts</span>
                    </div>
                    {/* Meta Starts */}

                    <div className="meta open-sans-font">
                      <span>
                        <i className="fa fa-user"></i> steve
                      </span>
                      <span className="date">
                        <i className="fa fa-calendar"></i> 9 January 2017
                      </span>
                      <span>
                        <i className="fa fa-tags"></i> wordpress, business,
                        economy, design
                      </span>
                    </div>
                    {/* Meta Ends */}
                    {/* Article Content Starts */}

                    <h1>{item.title}</h1>
                    <img src={item.img} className="img-fluid" alt="Blog" />
                    <div className="blog-excerpt open-sans-font pb-5">
                      <p>{item.description1}</p>
                      <div className="quotebox">
                        <div className="icon">
                          <img src="img/blog/quote.svg" alt="blog quote" />
                        </div>
                        <p>{item.description2}</p>
                      </div>
                      <p>{item.description3}</p>
                      <p>{item.description4}</p>
                    </div>
                    {/* Article Content Ends */}
                  </article>
                  {/* Article Ends */}
                </div>
              </div>
            </Modal>
            {/* End  ModalOneBlogContent */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
