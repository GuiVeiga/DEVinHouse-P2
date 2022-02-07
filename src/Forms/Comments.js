import React, { Fragment, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import { useParams } from 'react-router-dom';
import { H1, StyledComments, H2 } from './Comments.style';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const storageComments = localStorage.getItem(id);
    if (storageComments) {
      setComments(JSON.parse(storageComments));
    }
  }, [id]);

  function onSubmit(values, actions) {
    const item = {
      userID: Math.random().toString(16).slice(2),
      ...values,
    };
    localStorage.setItem(id, JSON.stringify([...comments, item]));
    window.location.reload(false);
  }

  return (
    <div>
      <StyledComments>
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{
            name: '',
            email: '',
            comment: '',
            likes: 0,
            dislikes: 0,
          }}
        >
          {({ values, errors, touched, isValid }) => (
            <Form>
              <H1>Comments</H1>
              <div>
                <label>Name: </label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label>Email: </label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label>Comment: </label>
                <Field name="comment" />
                <ErrorMessage name="comment" />
              </div>
              <button type="submit" disabled={!isValid}>
                Comment
              </button>
            </Form>
          )}
        </Formik>
      </StyledComments>
      {comments?.map((item) => (
        <Fragment key={item.userID}>
          <H2>{item.name}</H2>
          <p>{item.comment}</p>
          <p>
            Likes: {item.likes} Dislikes: {item.dislikes}
          </p>
        </Fragment>
      ))}
    </div>
  );
};

export default Comments;
