import { query as q } from "faunadb";

import { fauna } from "../../services/fauna";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  const { name, email } = req.body;

  try {
    await fauna.query(
      q.If(
        q.Not(
          q.Exists(
            q.Match(q.Index("user_by_email"), q.Casefold(req.body.email))
          )
        ),
        q.Create(q.Collection("users"), { data: { name, email } }),
        q.Update(q.Index("user_by_email"), q.Casefold(req.body.email))
      )
    );

    res.status(200).end();
  } catch {
    res.status(400).end();
  }
}
