import React, { useState } from "react";
import Modal from "react-modal";
import { Tab, Tabs, TabList } from "react-tabs";
import portfolio_data from "../../test";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [items, setItems] = useState(portfolio_data);
  const filterItem = (categoryItem) => {
    const updatedItems = portfolio_data.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
    console.log(updatedItems);
  };

  return (
    <>
      <Tabs>
        <TabList className="portfolio-tab-list">
          <Tab onClick={() => setItems(portfolio_data)}>ALL</Tab>
          <Tab onClick={() => filterItem("LOGO")}>LOGO</Tab>
          <Tab onClick={() => filterItem("VIDEO")}>VIDEO</Tab>
          <Tab onClick={() => filterItem("GRAPHIC_DESIGN")}>GRAPHIC DESIGN</Tab>
          <Tab onClick={() => filterItem("MOCKUP")}>MOCKUP</Tab>
        </TabList>

        <div className="portfolio-tab-content">
          <ul className="row grid justify-content-center">
            {items.map((item) => (
              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="0"
                className=""
                key={item.id}
              >
                <figure onClick={toggleModal}>
                  <img src={item.img} alt={item.name} />
                  <div className=" hover-content-wrapper">
                    <span className="content-title">{item.name}</span>
                  </div>
                </figure>

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

                    <div className="box_inner portfolio">
                      <div className="slideshow">
                        <figure>
                          {/* Project Details Starts */}
                          <figcaption>
                            <h3>{item?.popupName}</h3>
                            <div className="row open-sans-font">
                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-file-text-o pr-2"></i>
                                <span className="project-label">
                                  {item?.project}
                                </span>
                                {/* :
                                <span className="ft-wt-600 uppercase">
                                  Website
                                </span> */}
                              </div>
                              {/* End .col */}

                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-user-o pr-2"></i>
                                <span className="project-label">
                                  {item?.clint}
                                </span>
                                {/* :
                                <span className="ft-wt-600 uppercase">
                                  Envato
                                </span> */}
                              </div>
                              {/* End .col */}

                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-code pr-2"></i>
                                <span className="project-label">
                                  {item?.langages}
                                </span>
                                {/* :
                                <span className="ft-wt-600 uppercase">
                                  HTML, CSS, Javascript
                                </span> */}
                              </div>
                              {/* End .col */}

                              <div className="col-12 col-sm-6 mb-2">
                                <i className="fa fa-external-link pr-2"></i>
                                <span className="project-label pe-1">
                                  {item?.preview}
                                </span>

                                <span className="ft-wt-600 uppercase">
                                  <a
                                    href="https://themeforest.net/item/edina-personal-portfolio-react-template/34082686"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {item?.previewLink}
                                  </a>
                                </span>
                              </div>
                              {/* End .col */}
                            </div>
                            {/* End .row */}
                          </figcaption>
                          {/* Project Details Ends */}

                          {/*  Main Project Content Starts */}
                          <div>
                            <img src={item?.img} alt={item?.popupName} />
                          </div>
                          {/* Main Project Content Ends */}
                        </figure>
                      </div>
                    </div>
                  </div>
                </Modal>
              </li>
            ))}
          </ul>
        </div>
      </Tabs>
    </>
  );
};

export default Portfolio;
