export default {
  "GET /api/userinfo": (req, res) => {
    setTimeout(() => {
      res.status(200).send({
        data: {
          isSuperAdmin: false,
          isAppCreator: true,
          username: "tomcat",
        },
      });
    }, 500);
  },
};
