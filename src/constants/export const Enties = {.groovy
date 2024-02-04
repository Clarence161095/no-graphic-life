export const Enties = {


  'Quỷ Lùn Lửa': {
    name: 'Quỷ Lùn Lửa',
    description:
      'Quỷ Lùn Lửa là hình ảnh của sự mạnh mẽ và quyết liệt, với khả năng chiến đấu và phép thuật đặc biệt, bất chấp kích thước nhỏ bé của mình.',
    lore: 'Sinh ra từ vùng đất đầy lửa và sulfur, Quỷ Lùn Lửa là một Enti thuộc hệ Lửa và Bóng Tối. Với sức mạnh được rèn giũa qua hàng trăm năm, nó có khả năng chịu đựng và sức mạnh phi thường, cùng với khả năng sử dụng phép thuật đen tối.',
    stats: {
      hp: 250,
      physical_dame: 40,
      magic_dame: 60,
      physical_def: 30,
      magic_def: 45,
      speed: 25,
    },
    type: ['fire', 'dark'],
    skills: {
      'Hỏa Ngục': {
        name: 'Hỏa Ngục',
        description:
          'Quỷ Lùn Lửa triệu hồi ngọn lửa từ địa ngục, gây sát thương lớn lên kẻ địch. (Gây sát thương phép lớn.)',
        target: 'enemy',
        damage: 'magic,70',
        type: ['fire'],
        effect: [],
        use: 'active',
        countdown: 2,
      },
      'Bóng Đêm Bất Tận': {
        name: 'Bóng Đêm Bất Tận',
        description:
          'Bao phủ mục tiêu trong bóng tối, làm chậm và suy yếu chúng. (Giảm tốc độ và sức mạnh tấn công của kẻ địch.)',
        target: 'enemy',
        damage: '0',
        type: ['dark'],
        effect: ['reduce_speed,10%', 'reduce_atk,15%'],
        use: 'active',
        countdown: 3,
      },
      'Ánh Sáng Lấp Lánh': {
        name: 'Ánh Sáng Lấp Lánh',
        description:
          'Quỷ Lùn Lửa sử dụng ánh sáng lấp lánh để mê hoặc và làm lạc hướng kẻ địch, tạo cơ hội tấn công. (Làm choáng kẻ địch.)',
        target: 'enemy',
        damage: '0',
        type: ['dark'],
        effect: ['stun'],
        use: 'active',
        countdown: 4,
      },
      'Lửa Địa Ngục': {
        name: 'Lửa Địa Ngục',
        description:
          'Tăng cường sức mạnh của các đòn tấn công bằng lửa, gây thêm sát thương phép. (Tăng sát thương phép.)',
        target: 'self',
        damage: '0',
        type: ['fire'],
        effect: ['increase_magic_dame,20%'],
        use: 'passive',
        countdown: 0,
      },
    },
  },
  'Đội Trưởng Hải Cẩu': {
    name: 'Đội Trưởng Hải Cẩu',
    description:
      'Đội Trưởng Hải Cẩu là một thủy thủ dũng cảm, luôn sẵn lòng dẫn dắt đoàn thủy thủ của mình thông qua những con sóng dữ dội nhất.',
    lore: 'Đội Trưởng Hải Cẩu từng lái con tàu của mình qua nhiều cơn bão lớn, chứng tỏ bản lĩnh và tinh thần lãnh đạo không ngần ngại trước bất kỳ thử thách nào. Được trao tặng nhiều huy chương cho sự dũng cảm và thành tích xuất sắc, hình ảnh của nó là nguồn cảm hứng không chỉ cho Enti khác mà còn cho mọi thủy thủ trên khắp thế giới.',
    stats: {
      hp: 250,
      physical_dame: 50,
      magic_dame: 30,
      physical_def: 40,
      magic_def: 20,
      speed: 15,
    },
    type: ['water', 'steel'],
    skills: {
      'Lái Tàu Qua Bão': {
        name: 'Lái Tàu Qua Bão',
        description:
          'Nắm vững tay lái, Đội Trưởng Hải Cẩu dẫn dắt đồng đội thoát qua những thử thách khó khăn. (Tăng phòng thủ cho bản thân và đồng minh.)',
        target: 'self, allies',
        damage: '0',
        type: ['water'],
        effect: ['increase_def,20%'],
        use: 'active',
        countdown: 3,
      },
      'Chỉ Huy Tàu Chiến': {
        name: 'Chỉ Huy Tàu Chiến',
        description:
          'Ra lệnh cho đồng đội, tăng hiệu quả chiến đấu trên biển rộng lớn. (Tăng tốc độ và sát thương vật lý cho đồng minh.)',
        target: 'allies',
        damage: '0',
        type: ['water'],
        effect: ['increase_speed,10%', 'increase_phy_dame,15%'],
        use: 'active',
        countdown: 4,
      },
      'Pháo Hải Tặc': {
        name: 'Pháo Hải Tặc',
        description:
          'Bắn một loạt đạn pháo mạnh mẽ vào kẻ thù, làm chúng choáng váng trước sức mạnh của biển cả. (Gây sát thương vật lý lớn và có cơ hội làm choáng đối thủ.)',
        target: 'enemy',
        damage: 'physical,60',
        type: ['steel'],
        effect: ['stun_chance,10%'],
        use: 'active',
        countdown: 2,
      },
      'Tinh Thần Bất Khuất': {
        name: 'Tinh Thần Bất Khuất',
        description:
          'Khi hp giảm xuống dưới 20%, Đội Trưởng Hải Cẩu sẽ tăng tinh thần chiến đấu, phản ánh khả năng chịu đựng và bền bỉ trong gió bão. (Tăng hp.)',
        target: 'self',
        damage: '0',
        type: ['water'],
        effect: ['increase_hp,25%'],
        use: 'passive',
        countdown: 0,
      },
    },
  },
  'Hải Cẩu Máu Liều': {
    name: 'Hải Cẩu Máu Liều',
    description:
      'Hải Cẩu Máu Liều luôn sẵn sàng lao vào những cuộc phiêu lưu mạo hiểm với tinh thần không biết sợ là gì.',
    lore: 'Hải Cẩu Máu Liều từng vượt qua những vùng biển bí ẩn và trải qua không biết bao thử thách, từ những cơn gió cát bụi mù mịt cho tới những trận sóng gió khốc liệt. Enti này không chỉ có bản lĩnh phi thường mà còn sở hữu trái tim không ngại ngần trước mọi hiểm nguy.',
    stats: {
      hp: 220,
      physical_dame: 60,
      magic_dame: 20,
      physical_def: 30,
      magic_def: 15,
      speed: 35,
    },
    type: ['wind', 'adventure'],
    skills: {
      'Phiêu Lưu Kích Thích': {
        name: 'Phiêu Lưu Kích Thích',
        description:
          'Hải Cẩu Máu Liều tăng tốc độ của mình, sẵn sàng đối mặt với mọi thách thức. (Tăng tốc độ đáng kể.)',
        target: 'self',
        damage: '0',
        type: ['wind'],
        effect: ['increase_speed,25%'],
        use: 'active',
        countdown: 2,
      },
      'Thách Thức Mạo Hiểm': {
        name: 'Thách Thức Mạo Hiểm',
        description:
          'Thách thức kẻ thù với một pha nhào lộn táo bạo, làm chúng bất ngờ và mất tập trung. (Có khả năng làm choáng đối thủ.)',
        target: 'enemy',
        damage: '0',
        type: ['adventure'],
        effect: ['stun_chance,15%'],
        use: 'active',
        countdown: 3,
      },
      'Đòn Đâm Liều Lĩnh': {
        name: 'Đòn Đâm Liều Lĩnh',
        description:
          'Một cú đâm mạnh mẽ và không ngờ tới, phản ánh sự liều lĩnh của Hải Cẩu Máu Liều. (Gây sát thương vật lý lớn.)',
        target: 'enemy',
        damage: 'physical,70',
        type: ['wind'],
        effect: [],
        use: 'active',
        countdown: 1,
      },
      'Bản Năng Phiêu Lưu': {
        name: 'Bản Năng Phiêu Lưu',
        description:
          'Khi hp giảm xuống dưới 30%, Hải Cẩu Máu Liều sẽ nhận được một cơn bão tốc độ, sẵn sàng lao vào mạo hiểm tiếp theo. (Tăng tốc độ.)',
        target: 'self',
        damage: '0',
        type: ['wind'],
        effect: ['increase_speed,30%'],
        use: 'passive',
        countdown: 0,
      },
    },
  },
  'Lửng Mật Vô Đối': {
    name: 'Lửng Mật Vô Đối',
    description:
      'Lửng Mật Vô Đối là chiến binh không biết đến sợ hãi, luôn chiến đấu với bản lĩnh và sự dũng mãnh.',
    lore: 'Trên chiến trường, Lửng Mật Vô Đối nổi tiếng với bộ giáp tựa tổ ong cứng cáp và kiếm mật ong lấp lánh. Qua bao trận mạc, nó không những không khuất phục mà còn trở nên càng thêm mạnh mẽ, tựa như giáp ong của mình, luôn sẵn sàng chiến đấu cho lẽ phải.',
    stats: {
      hp: 300,
      physical_dame: 80,
      magic_dame: 25,
      physical_def: 60,
      magic_def: 40,
      speed: 25,
    },
    type: ['earth', 'honey'],
    skills: {
      'Kiếm Mật Ong': {
        name: 'Kiếm Mật Ong',
        description:
          'Lửng Mật Vô Đối sử dụng kiếm mật ong của mình để tấn công, gây sát thương lớn và có khả năng làm chậm đối thủ. (Gây sát thương vật lý và giảm tốc độ đối thủ.)',
        target: 'enemy',
        damage: 'physical,90',
        type: ['earth'],
        effect: ['slow,10%'],
        use: 'active',
        countdown: 2,
      },
      'Giáp Tổ Ong': {
        name: 'Giáp Tổ Ong',
        description:
          'Bảo vệ bản thân với bộ giáp tổ ong cứng cáp, giảm sát thương nhận vào từ mọi nguồn. (Giảm sát thương nhận vào.)',
        target: 'self',
        damage: '0',
        type: ['earth'],
        effect: ['reduce_damage,30%'],
        use: 'active',
        countdown: 4,
      },
      'Đòn Tấn Công Vô Đối': {
        name: 'Đòn Tấn Công Vô Đối',
        description:
          'Một cú đấm mạnh mẽ, thể hiện sức mạnh vô đối của Lửng Mật, có khả năng gây choáng. (Gây sát thương vật lý lớn và có cơ hội làm choáng đối thủ.)',
        target: 'enemy',
        damage: 'physical,100',
        type: ['earth'],
        effect: ['stun_chance,15%'],
        use: 'active',
        countdown: 1,
      },
      'Bất Diệt': {
        name: 'Bất Diệt',
        description:
          'Khi hp giảm xuống dưới 25%, Lửng Mật Vô Đối sẽ hồi phục một lượng hp nhất định, phản ánh khả năng phục hồi kỳ diệu của nó. (Hồi hp.)',
        target: 'self',
        damage: '0',
        type: ['honey'],
        effect: ['heal,20%'],
        use: 'passive',
        countdown: 0,
      },
    },
  },
  Lửng: {
    name: 'Lửng',
    description:
      'Lửng là loài động vật nổi tiếng với bản lĩnh và sự dũng cảm, không sợ đối mặt với bất kỳ kẻ thù nào.',
    lore: 'Lửng là Enti của sự kiên cường và mạnh mẽ. Sống trong môi trường khắc nghiệt, nó đã phát triển bản năng sinh tồn và khả năng chiến đấu phi thường, đôi khi còn khiến những kẻ thù lớn hơn phải e dè.',
    stats: {
      hp: 280,
      physical_dame: 70,
      magic_dame: 30,
      physical_def: 50,
      magic_def: 30,
      speed: 40,
    },
    type: ['earth', 'ferocity'],
    skills: {
      'Cào Prẫn': {
        name: 'Cào Prẫn',
        description:
          'Lửng tung ra những cú cào mạnh mẽ, gây sát thương vật lý lớn lên đối thủ và có khả năng làm chúng chảy máu. (Gây sát thương vật lý và hiệu ứng chảy máu.)',
        target: 'enemy',
        damage: 'physical,75',
        type: ['earth'],
        effect: ['bleed,5%'],
        use: 'active',
        countdown: 1,
      },
      'Nhanh Nhẹn': {
        name: 'Nhanh Nhẹn',
        description:
          'Tăng cường phản xạ và tốc độ của Lửng, giúp nó né tránh các đòn tấn công dễ dàng hơn. (Tăng tốc độ và khả năng né tránh.)',
        target: 'self',
        damage: '0',
        type: ['earth'],
        effect: ['increase_speed,15%', 'dodge_chance,10%'],
        use: 'active',
        countdown: 3,
      },
      'Phản Công': {
        name: 'Phản Công',
        description:
          'Khi bị tấn công, Lửng sẽ có cơ hội phản đòn lại đối thủ, gây sát thương vật lý tương đương. (Phản đòn khi bị tấn công.)',
        target: 'enemy',
        damage: 'physical,50',
        type: ['ferocity'],
        effect: ['counterattack,20%'],
        use: 'passive',
        countdown: 0,
      },
      'Bất Khuất': {
        name: 'Bất Khuất',
        description:
          'Khi hp giảm xuống dưới 20%, Lửng sẽ trở nên càng thêm mạnh mẽ, tăng sức mạnh của đòn tấn công tiếp theo. (Tăng sát thương vật lý.)',
        target: 'self',
        damage: '0',
        type: ['ferocity'],
        effect: ['increase_phy_dame,25%'],
        use: 'passive',
        countdown: 0,
      },
    },
  },
  'Súng Cao Su': {
    name: 'Súng Cao Su',
    description:
      'Súng Cao Su không chỉ là một vũ khí, mà còn là người bạn đồng hành đáng yêu với tính cách hóm hỉnh. Nó có khả năng biến hình tùy ý, mang lại niềm vui cho những ai sở hữu nó.',
    lore: 'Súng Cao Su được tạo ra bởi một pháp sư quái dị, với ý định ban sự vui vẻ và không ngờ tới cho thế giới. Nó có thể mềm dẻo uốn lượn như thật, và thậm chí có thể bắn ra những viên đạn cao su vui nhộn để làm chệch hướng kẻ thù hoặc tạo ra tiếng cười.',
    stats: {
      hp: 150,
      physical_dame: 10,
      magic_dame: 20,
      physical_def: 20,
      magic_def: 30,
      speed: 50,
    },
    type: ['magic', 'comedy'],
    skills: {
      'Đạn Cao Su Vui Nhộn': {
        name: 'Đạn Cao Su Vui Nhộn',
        description:
          'Bắn ra một loạt đạn cao su, gây sát thương nhẹ và làm chậm đối thủ bằng cách khiến họ cười không ngừng. (Giảm tốc độ đối phương.)',
        target: 'enemy',
        damage: 'magic,15',
        type: ['comedy'],
        effect: ['reduce_speed,10%'],
        use: 'active',
        countdown: 2,
      },
      'Biến Hình': {
        name: 'Biến Hình',
        description:
          'Súng Cao Su có thể thay đổi hình dạng của mình, giúp tránh né các cuộc tấn công hoặc tạo ra hiệu ứng bất ngờ. (Tăng khả năng né tránh.)',
        target: 'self',
        damage: '0',
        type: ['magic'],
        effect: ['increase_dodge,20%'],
        use: 'active',
        countdown: 3,
      },
      'Tiếng Cười Nhiễm Độc': {
        name: 'Tiếng Cười Nhiễm Độc',
        description:
          'Phát ra một tiếng cười nhiễm độc, làm giảm khả năng tập trung của đối thủ và gây sát thương theo thời gian. (Gây sát thương ma thuật dần dần.)',
        target: 'enemy',
        damage: 'magic,5',
        type: ['comedy', 'magic'],
        effect: ['dot,5'],
        use: 'active',
        countdown: 4,
      },
      'Bùng Nổ Cao Su': {
        name: 'Bùng Nổ Cao Su',
        description:
          'Tạo ra một vụ nổ lớn, bắn ra hàng loạt đạn cao su trong một khu vực rộng lớn, gây sát thương và làm chệch hướng đối phương. (Gây sát thương ma thuật lớn cho nhiều mục tiêu.)',
        target: 'enemies',
        damage: 'magic,30',
        type: ['magic'],
        effect: [],
        use: 'active',
        countdown: 5,
      },
    },
  },
  'Cô Giáo Dạy Hóa': {
    name: 'Cô Giáo Dạy Hóa',
    description:
      'Cô Giáo Dạy Hóa là người truyền cảm hứng cho học sinh với niềm đam mê không giới hạn trong lĩnh vực khoa học, đặc biệt là hóa học. Cô luôn sẵn lòng chia sẻ kiến thức và khơi gợi sự tò mò, khám phá trong mỗi học sinh.',
    lore: 'Cô Giáo Dạy Hóa không chỉ giảng dạy trong lớp học, mà còn là một nhà khoa học xuất sắc trong viện nghiên cứu. Cô đã phát hiện ra nhiều công thức mới, góp phần làm phong phú thêm kho tàng tri thức của nhân loại. Cô tin rằng, qua giáo dục, cô có thể khuyến khích thế hệ tương lai tiếp tục khám phá và phát triển lĩnh vực khoa học.',
    stats: {
      hp: 250,
      physical_dame: 10,
      magic_dame: 70,
      physical_def: 30,
      magic_def: 50,
      speed: 40,
    },
    type: ['knowledge', 'magic'],
    skills: {
      'Phản Ứng Hóa Học': {
        name: 'Phản Ứng Hóa Học',
        description:
          'Tạo ra một phản ứng hóa học mạnh mẽ, gây sát thương lớn bằng cách sử dụng các hợp chất hóa học. (Gây sát thương ma thuật.)',
        target: 'enemy',
        damage: 'magic,80',
        type: ['magic'],
        effect: [],
        use: 'active',
        countdown: 3,
      },
      'Bảo Vệ Bằng Kính Bảo Hộ': {
        name: 'Bảo Vệ Bằng Kính Bảo Hộ',
        description:
          'Sử dụng kính bảo hộ để tăng cường khả năng phòng thủ, giảm sát thương nhận vào từ các cuộc tấn công. (Giảm sát thương nhận vào.)',
        target: 'self',
        damage: '0',
        type: ['knowledge'],
        effect: ['reduce_damage,20%'],
        use: 'active',
        countdown: 4,
      },
      'Thí Nghiệm Nghiệm Khí': {
        name: 'Thí Nghiệm Nghiệm Khí',
        description:
          'Thực hiện một thí nghiệm phức tạp, tạo ra một đám mây khí độc hại làm chậm và gây sát thương dần dần cho kẻ địch. (Gây sát thương ma thuật theo thời gian và giảm tốc độ đối thủ.)',
        target: 'enemies',
        damage: 'magic,10',
        type: ['magic'],
        effect: ['dot,10', 'reduce_speed,10%'],
        use: 'active',
        countdown: 5,
      },
      'Bài Giảng Kích Thích': {
        name: 'Bài Giảng Kích Thích',
        description:
          'Cô giáo truyền cảm hứng và kích thích tinh thần học tập cho đồng minh, tăng sức mạnh tấn công và phòng thủ cho họ. (Tăng sát thương và phòng thủ cho đồng minh.)',
        target: 'allies',
        damage: '0',
        type: ['knowledge'],
        effect: ['increase_dame,15%', 'increase_def,15%'],
        use: 'active',
        countdown: 4,
      },
    },
  },
  'Quả Táo Cắn Dở': {
    name: 'Quả Táo Cắn Dở',
    description:
      'Quả Táo Cắn Dở không chỉ là một quả táo thông thường, nó mang trong mình phép thuật kỳ bí, cho phép nó cử động và biểu lộ cảm xúc như một sinh vật sống. Vết cắn trên thân tạo nên nụ cười tươi vui, mời gọi mọi người khám phá những bí mật ẩn chứa bên trong.',
    lore: 'Quả Táo Cắn Dở được phát hiện trong khu vườn cổ của một phù thủy. Nó không chỉ là biểu tượng của sự kiêu hãnh và tò mò, mà còn là chìa khóa mở cánh cửa dẫn đến những hiểu biết sâu sắc về phép thuật tự nhiên. Quả táo này có khả năng thay đổi vận mệnh của những ai dám khám phá nó.',
    stats: {
      hp: 100,
      physical_dame: 0,
      magic_dame: 50,
      physical_def: 10,
      magic_def: 40,
      speed: 30,
    },
    type: ['magic', 'nature'],
    skills: {
      'Lời Nguyền Của Táo': {
        name: 'Lời Nguyền Của Táo',
        description:
          'Phát ra một lời nguyền mạnh mẽ từ vết cắn, làm choáng hoặc gây hại cho kẻ thù. (Gây choáng hoặc sát thương ma thuật.)',
        target: 'enemy',
        damage: 'magic,60',
        type: ['magic'],
        effect: ['stun'],
        use: 'active',
        countdown: 3,
      },
      'Phép Màu Tái Sinh': {
        name: 'Phép Màu Tái Sinh',
        description:
          'Sử dụng sức mạnh tự nhiên để tái tạo bản thân, hồi phục một lượng lớn HP trong một lần sử dụng. (Hồi HP.)',
        target: 'self',
        damage: '0',
        type: ['nature'],
        effect: ['heal,50'],
        use: 'active',
        countdown: 5,
      },
      'Thủ Thuật Ẩn Mình': {
        name: 'Thủ Thuật Ẩn Mình',
        description:
          'Tạm thời trở nên vô hình trước mắt kẻ địch, tăng cơ hội né tránh các cuộc tấn công. (Tăng khả năng né tránh.)',
        target: 'self',
        damage: '0',
        type: ['magic'],
        effect: ['increase_dodge,25%'],
        use: 'active',
        countdown: 4,
      },
      'Bảo Vệ Tự Nhiên': {
        name: 'Bảo Vệ Tự Nhiên',
        description:
          'Tạo ra một lá chắn từ năng lượng tự nhiên xung quanh, giảm sát thương nhận vào từ các cuộc tấn công. (Giảm sát thương nhận vào.)',
        target: 'self',
        damage: '0',
        type: ['nature'],
        effect: ['reduce_damage,20%'],
        use: 'passive',
        countdown: 0,
      },
    },
  },
  'Heo Hải Tặc': {
    name: 'Heo Hải Tặc',
    description:
      'Heo Hải Tặc là thủ lĩnh dũng cảm của một đoàn hải tặc, nổi tiếng với lòng dũng cảm và tình yêu với những chuyến phiêu lưu trên biển cả. Luôn tìm kiếm kho báu và sẵn sàng đối đầu với mọi thách thức.',
    lore: 'Sinh ra trên một hòn đảo hẻo lánh, từ nhỏ Heo Hải Tặc đã mơ ước trở thành hải tặc vĩ đại nhất. Với bản lĩnh và trí thông minh, nó nhanh chóng trở thành thủ lĩnh của đoàn hải tặc, dẫn dắt đồng đội đi khắp các vùng biển, tìm kiếm kho báu và khám phá những bí mật của đại dương.',
    stats: {
      hp: 300,
      physical_dame: 70,
      magic_dame: 0,
      physical_def: 50,
      magic_def: 30,
      speed: 60,
    },
    type: ['adventure', 'water'],
    skills: {
      'Chém Gió Hải Tặc': {
        name: 'Chém Gió Hải Tặc',
        description:
          'Một đòn chém mạnh mẽ với thanh kiếm hải tặc, thể hiện sự dũng mãnh và không sợ hãi. (Gây sát thương vật lý lớn.)',
        target: 'enemy',
        damage: 'physical,80',
        type: ['adventure'],
        effect: [],
        use: 'active',
        countdown: 2,
      },
      'Hô Hào Thủy Thủ': {
        name: 'Hô Hào Thủy Thủ',
        description:
          'Tăng cường tinh thần cho đồng đội, hô hào họ chiến đấu mạnh mẽ hơn. (Tăng sức mạnh tấn công cho đồng minh.)',
        target: 'allies',
        damage: '0',
        type: ['adventure'],
        effect: ['increase_atk,20%'],
        use: 'active',
        countdown: 4,
      },
      'Phiêu Lưu Mạo Hiểm': {
        name: 'Phiêu Lưu Mạo Hiểm',
        description:
          'Heo Hải Tặc dùng trí tuệ và sự nhanh nhẹn của mình để né tránh các cuộc tấn công, tăng khả năng né tránh. (Tăng khả năng né tránh.)',
        target: 'self',
        damage: '0',
        type: ['adventure'],
        effect: ['increase_dodge,25%'],
        use: 'active',
        countdown: 3,
      },
      'Lời Nguyền Biển Cả': {
        name: 'Lời Nguyền Biển Cả',
        description:
          'Gọi lời nguyền của biển cả để làm chậm và yếu đi kẻ địch, giảm tốc độ và sức mạnh tấn công của chúng. (Giảm tốc độ và sát thương của đối thủ.)',
        target: 'enemies',
        damage: '0',
        type: ['water'],
        effect: ['reduce_speed,10%', 'reduce_atk,15%'],
        use: 'active',
        countdown: 5,
      },
    },
  },
  'Người Tối Cổ': {
    name: 'Người Tối Cổ',
    description:
      'Người Tối Cổ là hiện thân của sự sống sót và trí tuệ, với kỹ năng sinh tồn được mài giũa qua hàng ngàn năm. Họ mặc trang phục primitiv, sử dụng công cụ đá và mang trên mình những hình xăm tượng trưng cho mối liên hệ với thiên nhiên và các lực lượng huyền bí.',
    lore: 'Từ thời xa xưa, Người Tối Cổ đã sống hòa mình với thiên nhiên, học cách săn bắt, hái lượm và sử dụng các loại thảo mộc. Họ được coi là những nhà pháp sư đầu tiên, kết nối với thế giới tâm linh và điều khiển các lực lượng tự nhiên.',
    stats: {
      hp: 250,
      physical_dame: 50,
      magic_dame: 60,
      physical_def: 40,
      magic_def: 50,
      speed: 30,
    },
    type: ['earth', 'spirit'],
    skills: {
      'Gọi Hồn Tổ Tiên': {
        name: 'Gọi Hồn Tổ Tiên',
        description:
          'Kêu gọi sức mạnh của tổ tiên, tăng cường sức mạnh phép thuật và khả năng phục hồi. (Tăng sát thương phép và hồi máu.)',
        target: 'self',
        damage: '0',
        type: ['spirit'],
        effect: ['increase_magic_dame,20%', 'heal,30'],
        use: 'active',
        countdown: 4,
      },
      'Bảo Vệ Của Đất Mẹ': {
        name: 'Bảo Vệ Của Đất Mẹ',
        description:
          'Sử dụng sức mạnh của đất để tạo ra một lá chắn bảo vệ, giảm sát thương nhận vào từ kẻ địch. (Giảm sát thương nhận vào.)',
        target: 'self',
        damage: '0',
        type: ['earth'],
        effect: ['reduce_damage,25%'],
        use: 'active',
        countdown: 5,
      },
      'Lời Nguyền Cổ Đại': {
        name: 'Lời Nguyền Cổ Đại',
        description:
          'Phóng ra một lời nguyền cổ xưa, làm chậm và suy yếu kẻ địch. (Giảm tốc độ và sức mạnh tấn công của đối thủ.)',
        target: 'enemies',
        damage: '0',
        type: ['spirit'],
        effect: ['reduce_speed,15%', 'reduce_atk,20%'],
        use: 'active',
        countdown: 6,
      },
      'Sự Sống Của Thiên Nhiên': {
        name: 'Sự Sống Của Thiên Nhiên',
        description:
          'Kích hoạt sức mạnh sống của thiên nhiên xung quanh, hồi phục HP cho bản thân và đồng minh trong khu vực. (Hồi máu cho bản thân và đồng minh.)',
        target: 'allies',
        damage: '0',
        type: ['earth'],
        effect: ['heal,20'],
        use: 'active',
        countdown: 7,
      },
    },
  },
};
