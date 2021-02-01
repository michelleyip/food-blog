import React, { Component } from 'react';
import './assets/css/components.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';

import christmasbg from './assets/img/christmasbg.png';
import {Editor} from '@tinymce/tinymce-react';


class Newpost extends Component {
    constructor(props) {
      super(props);
      this.state = {
          cuisine:{},
          category:{},
          post:{},
          ingredient_editor:"",
          recipe_editor:"",
          post_img:{},
      };
      this.onSubmit = this.handleSubmit.bind(this);
      this.handleRecipeChange=this.handleRecipeChange.bind(this);
      this.handleIngredientChange=this.handleIngredientChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // Fetch
        fetch('/addrecipe',{
            method:'POST',
            headers:{'Accept':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Content-Type':'application/json'
        },
            body: JSON.stringify({
                recipe_category: this.state.category,
                recipe_cuisine: this.state.cuisine,
                recipe_title: document.getElementById("title").value,
                recipe_description: document.getElementById("description").value,
                recipe_cook_time: parseInt(document.getElementById("cook").value),
                recipe_prep_time: parseInt(document.getElementById("prep").value),
                recipe_total_time: parseInt(document.getElementById("prep").value)+parseInt(document.getElementById("cook").value),
                recipe_servings: document.getElementById("serving").value,
                recipe_ingredients: this.state.ingredient_editor,
                recipe_content: this.state.recipe_editor,
                recipe_author: document.getElementById("author").value
                // recipe_img:
            })
        })
        .then(function(response){
            console.log(response);
            return response.text();
        })
        .then(body=>console.log('Success', JSON.stringify(body)))
        .catch(error=>console.error('Error:', error));
    }

    handleIngredientChange(e){
        console.log('Content was updated:', e.target.getContent());
        this.setState({ingredient_editor: e.target.getContent()});
    }

    handleRecipeChange(e){
        console.log('Content was updated:', e.target.getContent());
        this.setState({recipe_editor: e.target.getContent()});
    }

    handleCuisineChange(event){
        this.setState({cuisine:event.target.value});
        console.log(event.target.value );

    }

    handleCategoryChange(event){
        this.setState({category:event.target.value});
        console.log(event.target.value );

    }

    handleChangeImg(e){
        // change here
        console.log(JSON.stringify(document.getElementById("img_file").files[0]));
    }

    render() {
        var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const content = <p>This is the initial content of the editor</p>
    return (
         <div className="site">
         <Navigation/>
         <h1 className="page-title">New Post</h1>
         <Form onSubmit={this.onSubmit}>
         <Container>
             <Form.Group as={Row} controlId="cuisine">
                 <Form.Label column sm="2">Cuisine: </Form.Label>
                 <Col sm="6">
                     <Form.Control as="select" onChange={this.handleCuisineChange.bind(this)}>
                         <option value="select">Select a Cuisine</option>
                         <option >British</option>
                         <option>Chinese</option>
                         <option >Korean</option>
                         <option >Japanese</option>
                         <option>Italian</option>
                         <option>French</option>
                         <option>Vietnamese</option>
                         <option>Thai</option>
                         <option>Malaysian</option>
                     </Form.Control>
                 </Col>
             </Form.Group>
             <Form.Group as={Row} controlId="category">
                 <Form.Label column sm="2">Category: </Form.Label>
                 <Col sm="6">
                     <Form.Control as="select" onChange={this.handleCategoryChange.bind(this)}>
                         <option value="select">Select a Category</option>
                         <option>Main</option>
                        <option>Starter</option>
                        <option>Side</option>
                        <option>Dessert</option>
                        <option>Drink</option>

                     </Form.Control>
                 </Col>
             </Form.Group>

             <Form.Group as={Row} controlId="title">
             <Form.Label column sm="2">Recipe Title: </Form.Label>
                 <Col sm="6">
                    <Form.Control type="text" />
                     </Col>
             </Form.Group>

             <Form.Group as={Row} controlId="description">
             <Form.Label column sm="2">Description: </Form.Label>
                 <Col sm="6">
                    <Form.Control type="text" />
                     </Col>
             </Form.Group>

             <Form.Group as={Row} controlId="prep">
             <Form.Label column sm="2">Prep Time: </Form.Label>
                 <Col sm="5">
                    <Form.Control type="text" />
                     </Col>
                     <Col sm="2">Mins</Col>
             </Form.Group>

             <Form.Group as={Row} controlId="cook">
             <Form.Label column sm="2">Cook Time: </Form.Label>
                 <Col sm="5">
                    <Form.Control type="text" />
                     </Col>
                     <Col sm="2">Mins</Col>
             </Form.Group>

             <Form.Group as={Row} controlId="serving">
             <Form.Label column sm="2">Servings: </Form.Label>
                 <Col sm="6">
                    <Form.Control type="text" />
                     </Col>
             </Form.Group>

             <Form.Group as={Row} controlId="img_file">
             <Form.Label column sm="2">Image File: </Form.Label>
                 <Col sm="6">
                    <Form.File onChange={this.handleChangeImg.bind(this)} />
                     </Col>
             </Form.Group>

             <Form.Group as={Row} controlId="author">
             <Form.Label column sm="2">Author: </Form.Label>
                 <Col sm="6">
                    <Form.Control type="text" />
                     </Col>
             </Form.Group>

             <Form.Label column sm="2">Ingredients: </Form.Label>
             <Editor
             apiKey="qnwxy59o4u27zn1rpclhag5roilzy503xciyccls1k37hdkg"
            //  initialValue = '<Container><Row><Col sm="5"><h3>Ingredient 1</h3></Col><Col sm="5"><h3>Ingredient 2</h3></Col></Row><Row><Col sm="6">Ingredient 1</Col><Col sm="6">Ingredient 2</Col></Row></Container>'
             init={{
           height: 500,
        //    menubar: false,
        //    plugins: [
        //      'advlist autolink lists link image charmap print preview anchor',
        //      'searchreplace visualblocks code fullscreen',
        //      'insertdatetime media table paste code help wordcount'
        //    ],
        //    table_toolbar: "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
        //    toolbar:
        //      'undo redo | formatselect | bold italic backcolor | \
        //      alignleft aligncenter alignright alignjustify | \
        //      bullist numlist outdent indent | removeformat | help'

        selector: 'textarea#full-featured-non-premium',
        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        imagetools_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        autosave_ask_before_unload: true,
        autosave_interval: '30s',
        autosave_prefix: '{path}{query}-{id}-',
        autosave_restore_when_empty: false,
        autosave_retention: '2m',
        image_advtab: true,
        link_list: [
          { title: 'My page 1', value: 'https://www.tiny.cloud' },
          { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_list: [
          { title: 'My page 1', value: 'https://www.tiny.cloud' },
          { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_class_list: [
          { title: 'None', value: '' },
          { title: 'Some class', value: 'class-name' }
        ],
        importcss_append: true,
        file_picker_callback: function (callback, value, meta) {
          /* Provide file and text for the link dialog */
          if (meta.filetype === 'file') {
            callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
          }
      
          /* Provide image and alt text for the image dialog */
          if (meta.filetype === 'image') {
            callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
          }
      
          /* Provide alternative source and posted for the media dialog */
          if (meta.filetype === 'media') {
            callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
          }
        },
        templates: [
              { title: 'Two Ingredients', description: 'creates a 2 lists', content: '<table style="border-collapse: collapse; width: 100%; height: 113px;" border="0"><tbody><tr style="height: 34px;"><td style="width: 48.6263%; height: 34px;"><h3 style="line-height: 1;">Ingredient 1</h3></td><td style="width: 48.7192%; height: 34px;"><h3 style="line-height: 1;">Ingredient 2</h3></td></tr><tr style="height: 79px;"><td style="width: 48.6263%; height: 79px; line-height: 1;"><p style="line-height: 1;">3 Eggs</p><p>1tsp Vanilla extract</p></td><td style="width: 48.7192%; height: 79px;"><p style="line-height: 1;">150ml Milk</p><p style="line-height: 1;">50g Sugar</p></td></tr></tbody></table><p>&nbsp;</p>' },
              { title: 'One Ingredient', description: 'creates a 1 lists', content: '<table style="border-collapse: collapse; width: 100%; height: 113px;" border="0"><tbody><tr style="height: 34px;"><td style="width: 48.6263%; height: 34px;"><h3 style="line-height: 1;">Ingredient 1</h3></td><td style="width: 48.7192%; height: 34px;"><h3></h3></td> </tr><tr style="height: 79px;"><td style="width: 48.6263%; height: 79px;"><p style="line-height: 1;">3 Eggs</p><p>1tsp Vanilla extract</p> </td> <td style="width: 48.7192%; height: 79px;"><p></p> <p></p> </td></tr></tbody> </table><p>&nbsp;</p>' },
             { title: 'test', description: 'New test', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
        ],
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_noneditable_class: 'mceNonEditable',
        toolbar_mode: 'sliding',
        contextmenu: 'link image imagetools table',
        skin: useDarkMode ? 'oxide-dark' : 'oxide',
        content_css: useDarkMode ? 'dark' : 'default',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
       
      
         }}
         onChange={this.handleIngredientChange}
       />

             <Form.Label column sm="2">Recipe: </Form.Label>

             <Editor
             apiKey="qnwxy59o4u27zn1rpclhag5roilzy503xciyccls1k37hdkg"
        //  initialValue={content}
         init={{
           height: 400,
        //    menubar: false,
        //    plugins: [
        //      'advlist autolink lists link image charmap print preview anchor',
        //      'searchreplace visualblocks code fullscreen',
        //      'insertdatetime media table paste code help wordcount'
        //    ],
        //    toolbar:
        //      'undo redo | formatselect | bold italic backcolor | \
        //      alignleft aligncenter alignright alignjustify | \
        //      bullist numlist outdent indent | removeformat | help'

  selector: 'textarea#full-featured-non-premium',
  plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
  imagetools_cors_hosts: ['picsum.photos'],
  menubar: 'file edit view insert format tools table help',
  toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
  toolbar_sticky: true,
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  image_advtab: true,
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' }
  ],
  importcss_append: true,
  file_picker_callback: function (callback, value, meta) {
    /* Provide file and text for the link dialog */
    if (meta.filetype === 'file') {
      callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
    }

    /* Provide image and alt text for the image dialog */
    if (meta.filetype === 'image') {
      callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
    }

    /* Provide alternative source and posted for the media dialog */
    if (meta.filetype === 'media') {
      callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
    }
  },
  templates: [
        { title: 'Recipe Format', description: 'The standard recipe format', content: '<ol><li>Preheat the oven to 200&nbsp;<strong>&deg;</strong>C</li><li>Sieve ingredients</li></ol>' },
    { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
    { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
  ],
  template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
  height: 400,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  contextmenu: 'link image imagetools table',
  skin: useDarkMode ? 'oxide-dark' : 'oxide',
  content_css: useDarkMode ? 'dark' : 'default',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'

         }}
         onChange={this.handleRecipeChange}
       />
       <br />
       <Button variant="outline-dark" type="submit">Submit</Button>
           </Container>
           </Form>

         <Footer/>

        </div>
    );

}
}
export default Newpost;