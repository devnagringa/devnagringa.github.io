---
layout: page
title: Sobre o site
permalink: /sobre/
---

<div class="section_2 tooltips">
             
<p> O  <span class="pointed">devnagringa</span> é uma iniciativa de alguns profissionais de TI que vivem discutindo assuntos, links, frameworks (?) e sobre conselhos de carreira. Basicamentes ligados por vontade de sempre aprender mais e compartilhar conhecimento na rede mundial de computadores. </p>
<p>A Ideia surgiu em uma mesa de bar enquanto reclamamos de alguma tecnologia proprietária criada por alguem em algum lugar do planeta, o processo de criação do blog foi bem simples, decidimos criar o blog, fizemos um Brainstorming para o nome, escolhemos o primeiro sugerido, registramos o domínio, pessoas ficaram ofendidas porque foi sugerido usar o wordpress, então decidimos não usar e fazer com qualquer coisa que rodasse no github pages. </p>
<p> O Blog é feito para aprender/compartilhar/divertir e nao é nosso trabalho oficial, portanto o conteudo nao tem conteudo, frequencia e etc definidas, vai ser igual aquele seu projeto/ideia brilhante que tem um readme.md no github mas você não escreve código nenhum. </p>

<br />
<div class="alert">
<button type="button" class="close" data-dismiss="alert">&times;</button>
<strong>Warning!</strong> vai ter piada do tiozao do pave sim!  
</div>


<div class="section authors_list">
          <h2 class="section_title section_title_big">Nosso time</h2>

 {% for user in site.team %}
<div class="author_details clearfix">
	<div class="f_left">
	  <div>
	    <img width="180px" src="{{ user.avatar }}" alt="">
	  </div>
<a href="#" class="button button_type_3 button_grey_light">1000 Posts</a>
	</div>
	<div>
	  <div class="post_text">
	    <h4>{{ user.name }}</h4>
	    <div class="event_date">{{ user.title }}</div>
	  </div>
	  <p>{{ user.description }}</p>  
	</div>
	</div>
 {% endfor %}
</div>            

</div>
