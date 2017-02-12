from django import forms

class RegProfileForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(label='Password', max_length=100)

