import Mock, { Random } from "mockjs";

Random.extend({
  pcd: function() {
    const res = [Random.province(), Random.city(), Random.county()]
    return res.join('/');
  }
});

export default {
  "GET /api/products": (req, res) => {
    res.status(200).send({
      data: Mock.mock({
        "list|3": [
          {
            id: "@guid",
            key: "@guid",
            name: "@cname",
            address: '@pcd',
            created: "@date",
            updated: "@date"
          },
        ],
      }).list,
    });
  },
};
