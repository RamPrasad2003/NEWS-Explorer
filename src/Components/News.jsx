import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps = {
        country: "in",
        category: "general",
    }
    static propTypes = {
        country: propTypes.string,
        category: propTypes.string,
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category} - NewsMonkey`.toUpperCase()
    }
    async updateNews() {
        this.props.setProgress(10)
        console.log(this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pagesize=6`
        this.props.setProgress(50)//de517d49ebee4fa592fa3ecc0aaaa02a
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(70)
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        console.log(this.state.articles.length )
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de517d49ebee4fa592fa3ecc0aaaa02a&page=${this.state.page}&pagesize=6`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    render() {
        return (
            <>
                <h1 className='text-center' style={{marginTop:"100px"}}>NewsMonkey - Top <span style={{ color: "#f50019" }}>{`${this.props.category}`.toUpperCase()}</span> HeadLines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                    <div className='row '>
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="col-md-4 my-3" >
                                <NewsItem title={element.title} description={element.description}
                                    imageUrl={element.urlToImage ? element.urlToImage : "https://www.legrand.com/ecatalogue/modules/custom/legrand_ecat/assets/img/no-image.png"}
                                    newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })
                        }
                    </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
