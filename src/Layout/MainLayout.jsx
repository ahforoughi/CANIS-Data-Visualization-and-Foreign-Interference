import "../layout.css";
import ROFChart from "../Components/ROF";
import ScatterPlot from "../Components/Scatter";
import BarPlot from "../Components/BarChart";
import PiePlot from "../Components/PieChart";
import WorldPie from "../Components/Country";
import GraphChart from "../Components/Graph";

function MainLayout() {

    const items = [
        { text: "ROF Chart" , id: "ROF"},
        { text: "Scatter Chart", id: "Scatter" },
        { text: "Media Chart", id: "BarChart" },
        { text: "Parent Media Chart", id: "PieChart" },
        { text: "Parent World Chart", id: "WorldPie" },
        { text: "Graph", id: "GraphChart" },
    ];

    function scrollToItem(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            <div className="app">
                <div className="flex-container-1">
                    <h1>Introduction</h1>
                    <div style={{ marginBottom: "30px",   textAlign: "justify", textJustify: "inter-word" }} >
                    <p>In a world increasingly connected by the invisible threads of the internet, the power of media has never been more pronounced. Among the global players in this digital arena, Chinese state media stands as a formidable force, weaving narratives that reach far beyond the Great Wall. But what is the true extent of this influence? How does the dragon of the East make its presence felt in the vast expanse of the digital world?</p>

<p>Our story unfolds in the realm of social media, a battleground where perceptions are shaped, and opinions are forged. Here, amidst tweets, likes, shares, and follows, Chinese state media has carved out a domain that resonates with millions worldwide. This narrative is not just about numbers and names; it's a tale of strategy, reach, and the subtle art of influence.</p>

<p>As we embark on this exploration, we dive into a dataset that lays bare the digital footprints of Chinese state media across various social media platforms. From Twitter's rapid-fire updates to the endless scroll of Instagram, from the dynamic worlds of YouTube and TikTok to the traditional realms of Facebook, these platforms serve as stages for a complex performance of power and persuasion.</p>

<p>Through this journey, we'll uncover how language, region, and technology intertwine in the dance of digital diplomacy. We'll see how a tweet can ripple across oceans, how a video can shape perceptions continents away, and how the strategic use of media can redraw the lines of global influence.</p>
                    </div>
                    
                    <div id="ROF">
                        <h2 className="titles">Digital Influence Map (ROF Chart)</h2>
                        <div style={{ marginBottom: "30px" }} className="alingText">
                        <p>Our data visualization presents a striking global heatmap, a testament to the strategic reach of Chinese state media across the globe. With North America immersed in a deep red, the data indicates this region is the primary target for engagement, a focal point in the digital influence campaign. The intensity here is not just a matter of color but of numbers—signifying a high concentration of followers, engagement, and content tailored for this audience.</p>

                        <p>Contrastingly, the lighter hues across Europe and Asia suggest a selective approach. The data might reflect a mix of regional languages used, content strategies adapted, and the varying degrees of platform penetration within these areas. Australia's prominence in red is notable; the dataset may reveal a concentrated effort to amplify presence and engagement, aligning with the geopolitical weight it carries in the Asia-Pacific narrative.</p>
                        </div>
                        <ROFChart />
                    </div>
                   
                   
                   <div id="Scatter">
                        <h2 className="titles">Dots and Distributions: The Social Media Spread</h2>
                        <div style={{ marginBottom: "30px" }} className="alingText">
                        <p>The scatter chart before us maps the distribution of Chinese state media across social media by region. Each bubble, a data point, varies in size—reflecting the number of followers or the level of activity in each locale.</p>

                        <p>Twitter's dominance is marked by large blue bubbles over English-speaking regions, indicating significant follower counts and engagement levels, a nod to Twitter's role in shaping public discourse.</p>

                        <p>Facebook's presence, represented by green, is also pronounced in these regions, but extends into MENA, suggesting a diversified approach to content and community building.</p>

                            
                        </div>
                        <ScatterPlot />
                    </div>
                    <div id="BarChart">
                        <h2 className="titles">The Vanguard of Visibility: China's Social Media Titans</h2>
                        <div style={{ marginBottom: "30px" }} className="alingText">
                        <p>As we turn to the bar charts, the hierarchy of influence within Chinese state media becomes clear. Each bar represents not just numbers, but narratives; each platform, a different stage for storytelling.</p>

                        <p>On Twitter, the chart highlights entities like CGTN and Xinhua News Agency as leading voices, their follower counts soaring into the millions. These long bars symbolize their wide-reaching influence, a digital echo of China's growing global voice.</p>

                        <p>Facebook's graph reveals a similar trend, with CGTN and China Daily at the forefront. The length of the bars here illustrates the depth of their digital penetration, with extensive networks that span the global village of Facebook's users.</p>

                        <p>Instagram's visual platform tells a different story, with People's Daily and Xinhua News Agency leading the way, leveraging images to bridge cultural divides and connect with a diverse, global audience.</p>

                        <p>TikTok's chart, dominated by People's Daily among others, reflects the power of viral content to captivate and engage, particularly with the younger demographics that crowd this burgeoning platform.</p>

                        <p>YouTube, known for its longer-form content, has CGTN and others setting the pace. The platform's bars, rising high, indicate a strategic use of video to craft more in-depth narratives that resonate with an international viewership.</p>

                        <p>These charts offer a window into the commanding presence of these entities across the social media spectrum, each wielding its following like a digital scepter, asserting the power of content in the modern struggle for influence and attention.</p>                       
                        </div>
                        <BarPlot />
                    </div>
                    <div id="PieChart">
                        <h2 className="titles">Integrating the Pie Chart Visualization</h2>
                        <div style={{ marginBottom: "30px" }} className="alingText">
                        <p>
                        The pie charts unfold the influence of China's state media, not as monoliths, but as a spectrum of voices stemming from various parent entities. Each slice of the pie is a share of voice, each color a different storyteller.
                        </p>
<p>
On Twitter, the chart shows a significant portion attributed to the State Council and Central Committee, illuminating their dominant role in shaping the conversation on a platform renowned for its public discourse.
                        </p>
                        </div>
                        <PiePlot />
                    </div>

                    <div id="WorldPie">
                        <h2 className="titles">Parent World Chart</h2>
                        <div style={{ marginBottom: "30px" }} className="alingText">
                        <p>Our global map is punctuated with pie charts, each representing the distribution of followers of Chinese state media's parent companies across various nations. These charts are more than mere illustrations; they are numerical representations of influence and strategy.</p>

<p>In North America, a dominant red slice indicates a substantial following for the Central Committee of the Chinese Communist Party. This is quantifiable influence, with engagement metrics likely mirroring the intensity of the coloration—a clear signal of targeted communication efforts.</p>

<p>The lighter hues across Europe and Asia reflect a diverse portfolio of influence. Here, the varied color distribution within each pie chart signals the use of multiple languages and culturally tailored content, suggesting a sophisticated, segmented approach to engagement across these regions.</p>
<p>In summation, these pie charts offer a detailed breakdown of Chinese state media's reach, providing insights into how different entities target and engage with international audiences. The data underlines the nuanced approach taken by these organizations, adapting to the linguistic and cultural landscapes of each region to maximize influence.</p>
                        </div>
                        <WorldPie />
                    </div>

                    <div id="GraphChart">
                        <h2 className="titles">Network Dynamics of Chinese State Media Influence</h2>
                        <div style={{ marginBottom: "30px" }} className="alingText">
                            <p>The network graph we see here serves as a map of Chinese state media's parent entities, their connections, and linguistic reach. Nodes represent entities, with their size reflecting the aggregate followers across all social media platforms. Edges signify a shared area of focus, providing a visual cue to the interconnectedness of these entities.</p>
                            <p>Large nodes such as those representing the Central Committee of the Chinese Communist Party and the State Council indicate entities with massive followings. These sizes are not just indicators of popularity but are reflective of the entities' capacity to disseminate information and engage with a global audience.</p>
                            <p>The interconnected lines reveal the collaborative nature of these entities' media strategies. When nodes are connected, it signifies a shared area of focus, demonstrating the coordinated effort to present a united front in certain thematic areas.</p>
                            <p>The colors of the nodes are indicative of the languages used by these entities. Blue for English, green for Chinese, and yellow for German. This linguistic breakdown provides insights into how Chinese state media tailors its content to cater to different linguistic demographics, an essential aspect of their global communication strategy.</p>
                            <p>By examining the density of connections and the linguistic spread, we can infer the strategic partnerships and target audiences. Entities with numerous connections likely serve as hubs of information, influencing both the content and the flow of communication within this network.</p>
                        </div>
                        <GraphChart />
                    </div>

                    <h2 className="titles">Conclusion</h2>
                        <div className="alingText">
                            <p>Our data-driven journey through Chinese state media's digital reach underscores a strategic, multifaceted presence on the global stage. The visualizations we've dissected reveal not just a quantitative footprint of followers and languages, but a qualitative display of influence and intent.</p>
                            <p>The interconnectedness of entities, the linguistic adaptability, and the targeted regional engagement speak to a nuanced approach to narrative construction—one that is keenly attuned to the dynamics of international discourse.</p>
                            <p>As we conclude, the message is clear: the realm of media is a battleground of narratives, with every like, share, and follow representing a stitch in the fabric of global perception. Chinese state media's adept use of this digital tapestry challenges us to consider the evolving landscape of influence and the future contours of global communication.</p>
                            
                    </div>

                    <h2 className="titles">Implementation</h2>
                        <div className="alingText">
                            <p>To visualize the extensive data on Chinese state media influence, we developed an interactive front-end using Vue.js, chosen for its responsive and component-driven architecture. Vite further streamlined our development process with its fast build times.</p>
                            <p>The backend analysis was powered by Python, utilizing libraries such as NumPy and Pandas for data manipulation, and NetworkX for mapping the complex relationships between media entities. Visualization was achieved through Pyplot and Seaborn, which translated our data into clear, engaging charts and graphs, making our findings both accessible and compelling.</p>
                            
                    </div>



                </div>
                <div className="flex-container-2">
                    <div style={{ position: "fixed" }}>
                        <h3>Data Visualization</h3>
                        {items.map((item, index) => (
                            <div key={index}>
                                <a href={`#${item.id}`} onClick={scrollToItem} className="anchor">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className="material-symbols-outlined" style={{ color: "#fec820", lineHeight: "inherit" }}>
                                            communities
                                        </span>
                                        <span style={{ marginLeft: '10px' }}>{item.text}</span>
                                    </div>
                                </a>
                                {(index != 5) && <span className="material-symbols-outlined" style={{ color: "#fec820", display: "block" }}>
                                    more_vert
                                </span>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout
