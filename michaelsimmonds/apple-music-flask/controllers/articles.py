from flask import Blueprint
from models.article import Article, ArticleSchema

article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)

api = Blueprint('articles', __name__)

@api.route('/articles', methods=['GET'])
def index():
    articles = Article.query.all()
    return articles_schema.jsonify(articles)
