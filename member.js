function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/components/member/skillsMember.html',
    scope: {
      skills: '='
    },
    link: function(scope, element, attrs) {
      scope.skills = scope.skills.split(',');
    }
  };
}