<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2017.0.0.363
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Home Form Submission',
	'heading' => 'New Form Submission',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Checked',
		'checkbox_unchecked' => 'Unchecked',
		'submitted_from' => 'Form submitted from website: %s',
		'submitted_by' => 'Visitor IP address: %s',
		'too_many_submissions' => 'Too many recent submissions from this IP',
		'failed_to_send_email' => 'Failed to send email',
		'invalid_reCAPTCHA_private_key' => 'Invalid reCAPTCHA private key.',
		'invalid_reCAPTCHA2_private_key' => 'Invalid reCAPTCHA 2.0 private key.',
		'invalid_reCAPTCHA2_server_response' => 'Invalid reCAPTCHA 2.0 server response.',
		'invalid_field_type' => 'Unknown field type \'%s\'.',
		'invalid_form_config' => 'Field \'%s\' has an invalid configuration.',
		'unknown_method' => 'Unknown server request method'
	),
	'email' => array(
		'from' => 'james.ca@me.com',
		'to' => 'james.ca@me.com'
	),
	'fields' => array(
		'custom_U6467' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'First Name',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'First Name\' is required.'
			)
		),
		'Email' => array(
			'order' => 3,
			'type' => 'email',
			'label' => 'Email',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Email\' is required.',
				'format' => 'Field \'Email\' has an invalid email.'
			)
		),
		'custom_U6463' => array(
			'order' => 7,
			'type' => 'string',
			'label' => 'Interesting Project',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6512' => array(
			'order' => 2,
			'type' => 'string',
			'label' => 'Last Name',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Last Name\' is required.'
			)
		),
		'custom_U6533' => array(
			'order' => 5,
			'type' => 'string',
			'label' => 'High School',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'High School\' is required.'
			)
		),
		'custom_U6581' => array(
			'order' => 4,
			'type' => 'string',
			'label' => 'Website',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Website\' is required.'
			)
		),
		'custom_U6597' => array(
			'order' => 6,
			'type' => 'string',
			'label' => 'Current year',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Current year\' is required.'
			)
		),
		'custom_U6613' => array(
			'order' => 8,
			'type' => 'string',
			'label' => 'Message',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Message\' is required.'
			)
		),
		'custom_U6629' => array(
			'order' => 9,
			'type' => 'string',
			'label' => 'Message',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Message\' is required.'
			)
		),
		'custom_U6645' => array(
			'order' => 10,
			'type' => 'string',
			'label' => 'Message',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Message\' is required.'
			)
		)
	)
);

process_form($form);
?>
