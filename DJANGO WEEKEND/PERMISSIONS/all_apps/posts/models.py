from django.db import models

# Create your models here.
class Post_category(models.Model):
    category_name=models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = 'Post Category'

    def __str__(self):
        return f'{self.category_name}'

class Posts(models.Model):
    # many to one
    category=models.ForeignKey(Post_category,related_name='post',on_delete=models.CASCADE)
    post_img=models.ImageField(upload_to='uploads/')
    topic=models.CharField(max_length=500)
    content=models.TextField()
    publish_at=models.DateTimeField(auto_now_add=True)
    update_at=models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Post'

    def __str__(self):
        return f'{self.topic}'
    
