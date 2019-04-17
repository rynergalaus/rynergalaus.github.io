<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class RSG extends CI_Controller {

    public function view($page = 'home')
    {
    	if ( ! file_exists(APPPATH.'views/_/home.php')) { show_404(); }

        $data['title'] = ucfirst($page); // Capitalize the first letter
        $this->load->helper('url');
        $data['rsg_libraries'] = base_url().'rsg/lib/';
        $data['rsg_home'] = '/rynergalaus-github';
        $data['rsg_about'] = '/rynergalaus-github/about';
        $data['rsg_contact'] = '/rynergalaus-github/contact';
        $data['rsg_wp_plugins'] = '/rynergalaus-github/wp_plugins';
        $data['rsg_wp_themes'] = '/rynergalaus-github/wp_themes';
        $data['rsg_resume'] = '/rynergalaus-github/resume';

        $this->load->view('temps/header', $data);
        $this->load->view('_/'.$page, $data);
        $this->load->view('temps/footer', $data);
    }
}