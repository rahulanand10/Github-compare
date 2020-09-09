import React from 'react'
import {Form,Card,Icon,Image} from 'semantic-ui-react';
import './Cards.css'
const Cards=(props)=>{
    return(
        <div className='carding'>
            <Card>
                <Image src={props.avatar} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                </Card.Content>

                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.id} Rank
                </a>
                </Card.Content>

                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.followers} Followers
                </a>
                </Card.Content>

                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.repos} Repos
                </a>
                </Card.Content>

                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.following} Following
                </a>
                </Card.Content>

            </Card>
        </div>
    )
}
export default Cards;