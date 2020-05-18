//import './NewsCard.css';

import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

class NewsCard extends React.Component {
    /* by click news url, redirect to source */
    redirectToUrl(url, event) {
        event.preventDefault();
        window.open(url, '_blank');
    }

    render() {
        return (
            <Card className="card">
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="320"
                   image={this.props.news.urlToImage}
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h4" component="h2">
                     {this.props.news.title}
                   </Typography>
                   {this.props.news.source != null && <Chip label={this.props.news.source} color="primary" />}
                   &nbsp; &nbsp;
                   {this.props.news.reason != null && <Chip label={this.props.news.reason} color="secondary" />}
                   &nbsp; &nbsp;
                   {this.props.news.time != null && <Chip label={this.props.news.time} variant="outlined" color="primary" />}
                   <br/>
                   <br/>
                   <Typography component="p">
                     {this.props.news.description}
                   </Typography>
                 </CardContent>
               </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={(event)=>this.redirectToUrl(this.props.news.url, event)}>
                            Learn More
                        </Button>
                        <FacebookShareButton url={this.props.news.url} quote={this.props.news.title}>
                        <FacebookIcon size={24} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                        url={this.props.news.url}
                        quote={this.props.news.title}>
                        <TwitterIcon size={24} />
                        </TwitterShareButton>
                        <LinkedinShareButton
                        url={this.props.news.url}
                        quote={this.props.news.title}>
                    <LinkedinIcon size={24} />
                    </LinkedinShareButton>
                </CardActions>
            </Card>
        );
    }
}

export default NewsCard;
