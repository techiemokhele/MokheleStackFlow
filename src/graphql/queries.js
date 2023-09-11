import { gql } from "urql";

//get all questions for home screen
export const questionsQuery = gql`
  query MyQuery($sort: QuestionSort!) {
    questions(sort: $sort) {
      items {
        answer_count
        creation_date
        body_markdown
        score
        tags
        title
        view_count
        question_id
        owner {
          display_name
          account_id
          profile_image
          reputation
          user_id
          user_type
        }
      }
    }
  }
`;

//get question by id
export const getQuestionQuery = gql`
  query GetQuestion($id: Int!) {
    question(questionId: $id) {
      has_more
      quota_max
      quota_remaining
      items {
        answer_count
        body_markdown
        creation_date
        is_answered
        link
        owner {
          account_id
          display_name
          link
          profile_image
          reputation
          user_id
          user_type
        }
        question_id
        score
        tags
        title
        view_count
        answers {
          answer_id
          body_markdown
          creation_date
          is_accepted
          last_activity_date
          question_id
          score
          owner {
            account_id
            display_name
            link
            profile_image
            reputation
            user_id
            user_type
          }
        }
      }
    }
  }
`;
