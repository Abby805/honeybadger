(function someThemeBehavior($, Drupal) {
  Drupal.behaviors.someThemeBehavior = {
    attach: function someBehaviorAttach(context) {
      const $someRelevantElement = $('#some-selector', context);

      if (!$someRelevantElement.length) {
        return;
      }

      // Now do your thing.

      // Example with debounce:
      const doThisOnScroll = debounce(() => {
        // Whatever you want it to do on scroll
      });

      window.addEventListener('scroll', doThisOnScroll);

      // Example wih once:
      $('.some-other-selector').once('arbitray-name').click(functin() {
        // Do something
      });

    },
  };
}(jQuery, Drupal, Drupal.debounce));
