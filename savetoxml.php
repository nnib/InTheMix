<?php 

  $fname = $_POST["name"];
  $femail = $_POST["email"];
  $fphone = $_POST["phone"];
  $fmessage = $_POST["message"];
  
  
  
  $doc = new DOMDocument(); 
  $doc->formatOutput = true; 
   
  $r = $doc->createElement( "contact_form" ); 
  $doc->appendChild( $r );
  
  // this is to make sure the old list stays
  $olddoc = new DOMDocument(); 
  $olddoc->load( 'contact_form.xml' );
     
  $contacts = $olddoc->getElementsByTagName( "contact" );
  if($contacts){
    foreach( $contacts as $contact ) 
    { 
      
      $b = $doc->createElement( "contact" );
      
      $names = $contact->getElementsByTagName( "name" ); 
      $n = $names->item(0)->nodeValue;
     
      $name = $doc->createElement( "name" ); 
      $name->appendChild( 
      $doc->createTextNode( $n ) 
      ); 
      $b->appendChild( $name ); 
      
      
      $emails= $contact->getElementsByTagName( "email" ); 
      $e = $emails->item(0)->nodeValue; 
      
      $email = $doc->createElement( "email" ); 
      $email->appendChild( 
      $doc->createTextNode( $e ) 
      ); 
      $b->appendChild( $email ); 
      
      
      $phones = $contact->getElementsByTagName( "phone" ); 
      $ph = $phones->item(0)->nodeValue;
      
      $phone = $doc->createElement( "phone" ); 
      $phone->appendChild( 
      $doc->createTextNode( $ph ) 
      );
      
      $b->appendChild( $phone ); 
       
      $messages = $contact->getElementsByTagName( "message" ); 
      $m = $messages->item(0)->nodeValue;
      
      $message = $doc->createElement( "message" ); 
      $message->appendChild( 
      $doc->createTextNode( $m ) 
      );
      
      $b->appendChild( $message ); 
       
      $r->appendChild( $b );
      
    }
  }
   
  $b = $doc->createElement( "contact" ); 
   
  $name = $doc->createElement( "name" ); 
  $name->appendChild( 
  $doc->createTextNode( $fname ) 
  ); 
  $b->appendChild( $name ); 
   
  $email = $doc->createElement( "email" ); 
  $email->appendChild( 
  $doc->createTextNode( $femail ) 
  ); 
  $b->appendChild( $email ); 
  
  $phone = $doc->createElement( "phone" ); 
  $phone->appendChild( 
  $doc->createTextNode( $fphone ) 
  );
  
  $b->appendChild( $phone ); 
   
  $message = $doc->createElement( "message" ); 
  $message->appendChild( 
  $doc->createTextNode( $fmessage ) 
  );
  
  $b->appendChild( $message ); 
   
  $r->appendChild( $b ); 
  
   
  $doc->save("contact_form.xml");
  include "contact.html";
  echo "<script>alert('Thank you for your message, we will get back to you soon')</script>";

?>