import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
    {
        title: <>Programming</>,
        imageUrl: "img/intro-1.svg",
        description: (
            <>
                If you have to spend effort looking at a fragment of code and
                figuring out what it's doing, then you should extract it into a
                function and name the function after the "what".
            </>
        ),
    },
    {
        title: <>DevOps</>,
        imageUrl: "img/intro-2.svg",
        description: (
            <>
                The most powerful tool we have as developers is automation.
                Currently, DevOps is more like a philosophical movement, not yet
                a precise collection of practices, descriptive or prescriptive.
            </>
        ),
    },
    {
        title: <>Networks</>,
        imageUrl: "img/intro-3.svg",
        description: (
            <>
                Today, Web services is really about developing for the server.
                What it means to developers is any set of systems services that
                you make a Web service you to access by any kind of device with
                a highly interactive client, not just a browser.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames("col col--4", styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3 className="text--center">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout description="DevOps - SRE / Network Eng">
            <header
                className={classnames("hero hero--primary", styles.heroBanner)}
            >
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                "button button--outline button--secondary button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("docs/description")}
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
