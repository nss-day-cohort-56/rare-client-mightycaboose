import React from "react";

export const Post = ({ post, reaction, onEditButtonClick, onDeleteButtonClick }) => {
    const getMessageType = () => {
    if (reaction) {
        switch (reaction.label) {
        case 'Oh My':
            return 'is-surprise'
        case 'Happy':
            return 'is-success'
        default:
            break;
        }
    }
    }

    /*user_id" INTEGER,
  "category_id" INTEGER,
  "title" varchar,
  "publication_date" date,
  "image_url" varchar,
  "content" varchar,
  "approved" bit,
    */

    return (
    <article className={`message ${getMessageType()}`} style={{width:"100%"}}>
        <div className="message-body">
        <p className="post__title">{post.title}</p>
        <p className="post__publication_date">{post.publication_date}</p>
        <p className="post__content">{post.content}</p>
        <p className="post__image_url">{post.image_url}</p>
        <p className="post__reaction">{reaction?.label}</p>
        <div className="buttons">
            <button className={`button ${getMessageType()} is-outlined`} onClick={
            () => {
                onEditButtonClick(post.id)
            }
            }>Edit</button>
            <button className={`button ${getMessageType()}`} onClick={
            () => {
                onDeleteButtonClick(post.id)
            }
            }>Delete</button>
        </div>
        </div>
    </article>
    )
};
