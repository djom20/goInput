/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2014 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        // .state('solicitudes', {
        //     url: "/solicitudes",
        //     controller: wizardCtrl,
        //     data: { pageTitle: 'Solicitudes' }
        // })
        .state('evaluacion', {
            url: "/evaluacion",
            templateUrl: "views/evaluacion.html",
            controller: wizardCtrl,
            data: { pageTitle: 'Evaluacion' }
        })
        .state('reclutamiento', {
            url: "/reclutamiento",
            templateUrl: "views/reclutamiento.html",
            controller: wizardCtrl,
            data: { pageTitle: 'Reclutamiento' }
        })
        .state('solicitudes_pendientes', {
            url: "/solicitudes_pendientes",
            templateUrl: "views/solicitudes_pendientes.html",
            controller: wizardCtrl,
            data: { pageTitle: 'Solicitudes Pendientes' }
        })
        .state('detalle_solicitud', {
            url: "/detalle_solicitud",
            templateUrl: "views/detalle_solicitud.html",
            controller: wizardCtrl,
            data: { pageTitle: 'Solicitudes Pendientes' }
        })
          
        // .state('evaluacion.paso_uno', {
        //     url: "/paso_uno",
        //     templateUrl: "views/evaluacion/paso_uno.html",
        //     data: { pageTitle: 'Evaluacion' }
        // })
        // .state('evaluacion.paso_dos', {
        //     url: "/paso_dos",
        //     templateUrl: "views/evaluacion/paso_dos.html",
        //     data: { pageTitle: 'Evaluacion' }
        // })
        // .state('evaluacion.paso_tres', {
        //     url: "/paso_tres",
        //     templateUrl: "views/evaluacion/paso_tres.html",
        //     data: { pageTitle: 'Evaluacion' }
        // })
        .state('reclutamiento.paso_uno', {
            url: "/paso_uno",
            templateUrl: "views/reclutamiento/paso_uno.html",
            data: { pageTitle: 'Reclutamiento' }
        })
        .state('reclutamiento.paso_dos', {
            url: "/paso_dos",
            templateUrl: "views/reclutamiento/paso_dos.html",
            data: { pageTitle: 'Reclutamiento' }
        })
        .state('reclutamiento.paso_tres', {
            url: "/paso_tres",
            templateUrl: "views/reclutamiento/paso_tres.html",
            data: { pageTitle: 'Reclutamiento' }
        })
        .state('reclutamiento.paso_cuatro', {
            url: "/paso_cuatro",
            templateUrl: "views/reclutamiento/paso_cuatro.html",
            data: { pageTitle: 'Reclutamiento' }
        })
        .state('dashboard', {
            url: "/",
            templateUrl: "views/dashboard_1.html",
        })
        .state('objetos', {
            url: "/objetos",
            templateUrl: "views/objetos.html",
            controller: objCtrl,
            data: { pageTitle: 'Objetos' }
        })


        // .state('dashboard_2', {
        //     url: "/dashboard_2",
        //     templateUrl: "views/dashboard_2.html",
        //     data: { pageTitle: 'Dashboard 2' }
        // })
        // .state('dashboard_3', {
        //     url: "/dashboard_3",
        //     templateUrl: "views/dashboard_3.html",
        //     data: { pageTitle: 'Dashboard 3' }
        // })
        // .state('flot_chart', {
        //     url: "/flot_chart",
        //     templateUrl: "views/graph_flot.html",
        //     data: { pageTitle: 'Flot chart' }
        // })
        // .state('morris_chart', {
        //     url: "/morris_chart",
        //     templateUrl: "views/graph_morris.html",
        //     data: { pageTitle: 'Morris chart' }
        // })
        // .state('rickshaw_chart', {
        //     url: "/rickshaw_chart",
        //     templateUrl: "views/graph_rickshaw.html",
        //     data: { pageTitle: 'Rickshaw chart' }
        // })
        // .state('peity_chart', {
        //     url: "/peity_chart",
        //     templateUrl: "views/graph_peity.html",
        //     data: { pageTitle: 'Peity graphs' }
        // })
        // .state('sparkline_chart', {
        //     url: "/sparkline_chart",
        //     templateUrl: "views/graph_sparkline.html",
        //     data: { pageTitle: 'Sparkline chart' }
        // })
        // .state('chartjs_chart', {
        //     url: "/chartjs_chart",
        //     templateUrl: "views/chartjs.html",
        //     data: { pageTitle: 'Chart.js' }
        // })
        // .state('inbox', {
        //     url: "/inbox",
        //     templateUrl: "views/mailbox.html",
        //     data: { pageTitle: 'Mail Inbox' }
        // })
        // .state('email_view', {
        //     url: "/email_view",
        //     templateUrl: "views/mail_detail.html",
        //     data: { pageTitle: 'Mail detail' }
        // })
        // .state('email_compose', {
        //     url: "/email_compose",
        //     templateUrl: "views/mail_compose.html",
        //     data: { pageTitle: 'Mail compose' }
        // })
        // .state('widgets', {
        //     url: "/widgets",
        //     templateUrl: "views/widgets.html",
        //     data: { pageTitle: 'Widhets' }
        // })
        // .state('basic_form', {
        //     url: "/basic_form",
        //     templateUrl: "views/form_basic.html",
        //     data: { pageTitle: 'Basic form' }
        // })
        // .state('advanced_plugins', {
        //     url: "/advanced_plugins",
        //     templateUrl: "views/form_advanced.html",
        //     data: { pageTitle: 'Advanced form' }
        // })
        // .state('wizard', {
        //     url: "/wizard",
        //     templateUrl: "views/form_wizard.html",
        //     controller: wizardCtrl,
        //     data: { pageTitle: 'Wizard form' }
        // })
        // .state('wizard.step_one', {
        //     url: '/step_one',
        //     templateUrl: 'views/wizard3/step_one.html',
        //     data: { pageTitle: 'Wizard form' }
        // })
        // .state('wizard.step_two', {
        //     url: '/step_two',
        //     templateUrl: 'views/wizard3/step_two.html',
        //     data: { pageTitle: 'Wizard form' }
        // })
        // .state('wizard.step_three', {
        //     url: '/step_three',
        //     templateUrl: 'views/wizard3/step_three.html',
        //     data: { pageTitle: 'Wizard form' }
        // })
        // .state('file_upload', {
        //     url: "/file_upload",
        //     templateUrl: "views/form_file_upload.html",
        //     data: { pageTitle: 'File upload' }
        // })
        // .state('text_editor', {
        //     url: "/text_editor",
        //     templateUrl: "views/form_editors.html",
        //     data: { pageTitle: 'Text editor' }
        // })
        .state('contactos', {
            url: "/contactos",
            templateUrl: "views/contacts.html",
            data: { pageTitle: 'Contactos' }
        })
        .state('profile', {
            url: "/profile",
            templateUrl: "views/profile.html",
            data: { pageTitle: 'Perfil' }
        })
        .state('myprofile', {
            url: "/myprofile",
            templateUrl: "views/personal-profile.html.html",
            data: { pageTitle: 'Mi Perfil' }
        })
        // .state('projects', {
        //     url: "/projects",
        //     templateUrl: "views/projects.html",
        //     data: { pageTitle: 'Projects' }
        // })
        // .state('project_detail', {
        //     url: "/project_detail",
        //     templateUrl: "views/project_detail.html",
        //     data: { pageTitle: 'Project detail' }
        // })
        // .state('file_manager', {
        //     url: "/file_manager",
        //     templateUrl: "views/file_manager.html",
        //     data: { pageTitle: 'File manager' }
        // })
        // .state('calendar', {
        //     url: "/calendar",
        //     templateUrl: "views/calendar.html",
        //     data: { pageTitle: 'Calendar' }
        // })
        // .state('faq', {
        //     url: "/faq",
        //     templateUrl: "views/faq.html",
        //     data: { pageTitle: 'FAQ' }
        // })
        // .state('timeline', {
        //     url: "/timeline",
        //     templateUrl: "views/timeline.html",
        //     data: { pageTitle: 'Timeline' }
        // })
        // .state('pin_board', {
        //     url: "/pin_board",
        //     templateUrl: "views/pin_board.html",
        //     data: { pageTitle: 'Pin board' }
        // })
        // .state('invoice', {
        //     url: "/invoice",
        //     templateUrl: "views/invoice.html",
        //     data: { pageTitle: 'Invoice' }
        // })
        // .state('search_results', {
        //     url: "/search_results",
        //     templateUrl: "views/search_results.html",
        //     data: { pageTitle: 'Search results' }
        // })
        // .state('empy_page', {
        //     url: "/empy_page",
        //     templateUrl: "views/empty_page.html",
        //     data: { pageTitle: 'Empty page' }
        // })
        // .state('typography', {
        //     url: "/typography",
        //     templateUrl: "views/typography.html",
        //     data: { pageTitle: 'Typography' }
        // })
        // .state('icons', {
        //     url: "/icons",
        //     templateUrl: "views/icons.html",
        //     data: { pageTitle: 'Icons' }
        // })
        // .state('draggable_panels', {
        //     url: "/draggable_panels",
        //     templateUrl: "views/draggable_panels.html",
        //     data: { pageTitle: 'Draggable panels' }
        // })
        // .state('buttons', {
        //     url: "/buttons",
        //     templateUrl: "views/buttons.html",
        //     data: { pageTitle: 'Buttons' }
        // })
        // .state('tabs_panels', {
        //     url: "/tabs_panels",
        //     templateUrl: "views/tabs_panels.html",
        //     data: { pageTitle: 'Tabs and panels' }
        // })
        // .state('notifications_tooltips', {
        //     url: "/notifications_tooltips",
        //     templateUrl: "views/notifications.html",
        //     data: { pageTitle: 'Notifications and tooltips' }
        // })
        // .state('badges_labels', {
        //     url: "/badges_labels",
        //     templateUrl: "views/badges_labels.html",
        //     data: { pageTitle: 'Badges and labels and progress' }
        // })
        // .state('video', {
        //     url: "/video",
        //     templateUrl: "views/video.html",
        //     data: { pageTitle: 'Responsible Video' }
        // })
        // .state('grid_options', {
        //     url: "/grid_options",
        //     templateUrl: "views/grid_options.html",
        //     data: { pageTitle: 'Grid options' }
        // })
        // .state('static_table', {
        //     url: "/static_table",
        //     templateUrl: "views/table_basic.html",
        //     data: { pageTitle: 'Static table' }
        // })
        // .state('data_tables', {
        //     url: "/data_tables",
        //     templateUrl: "views/table_data_tables.html",
        //     data: { pageTitle: 'Data Tables' }
        // })
        // .state('basic_gallery', {
        //     url: "/basic_gallery",
        //     templateUrl: "views/basic_gallery.html",
        //     data: { pageTitle: 'Basic gallery' }
        // })
        // .state('bootstrap_carousel', {
        //     url: "/bootstrap_carousel",
        //     templateUrl: "views/carousel.html",
        //     data: { pageTitle: 'Bootstrap carousel' }
        // })
        .state('css_animations', {
            url: "/css_animations",
            templateUrl: "views/css_animation.html",
            data: { pageTitle: 'CSS Animations' }
        });
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });