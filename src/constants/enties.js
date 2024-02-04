export const Enties = {
  'Chuột Dũng Cảm': {
    name: 'Chuột Dũng Cảm',
    description:
      'Chuột Dũng Cảm là biểu tượng của lòng can đảm và quyết tâm, luôn sẵn sàng đối mặt với thách thức dù trong hoàn cảnh khó khăn nhất.',
    lore: 'Chuột Dũng Cảm là một Enti thuộc hệ Ánh Sáng và Thép. Sinh ra và lớn lên tại vùng đất của những chiến binh huyền thoại, nó đã thừa hưởng tinh thần chiến đấu và sự dũng cảm từ những người đi trước. Tuy nhỏ bé, nhưng Chuột Dũng Cảm sở hữu sức mạnh tinh thần phi thường và khả năng phòng thủ vững chắc.',
    stats: {
      hp: 200,
      physical_dame: 30,
      magic_dame: 40,
      physical_def: 25,
      magic_def: 35,
      speed: 20,
    },
    type: ['light', 'steel'],
    skills: {
      'Lửa Dũng Khí': {
        name: 'Lửa Dũng Khí',
        description:
          'Chuột Dũng Cảm thắp lên ngọn lửa trong lòng, tăng sức mạnh tấn công của mình và đồng minh. (Tăng 15% sát thương vật lý và ma thuật trong 4 lượt và xoá bỏ mọi hiệu ứng bất lợi của toàn team.)',
        target: ['self', 'allies'],
        damage: {
          physical: 15,
          magic: 0,
        },
        type: ['light'],
        use: 'active',
        countdown: 2, // 2 turn
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self, allies }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.15;
              self.current.magic_dame += self.stats.magic_dame * 0.15;
              allies.forEach((ally) => {
                ally.current.physical_dame += ally.stats.physical_dame * 0.15;
                ally.current.magic_dame += ally.stats.magic_dame * 0.15;
              });
            },
            duration: 4, // 4 turn
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ self }) => {
                self.current.physical_dame += self.stats.physical_dame * 0.15;
                self.current.magic_dame += self.stats.magic_dame * 0.15;
              },
              duration: 4, // 4 turn
            });
          });
          allies.forEach((ally) => {
            ally.current.adverseEffect = [];
          });
        },
      },
      'Giáp Thép': {
        name: 'Giáp Thép',
        description:
          'Tạo ra một lá chắn thép bảo vệ bản thân, giảm sát thương nhận vào. (Tạo giáp ảo bằng 20% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['steel'],
        use: 'active',
        countdown: 3, // 3 turn
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.2;
            },
            duration: 0, // 0 turn
          });
        },
      },
      'Kiếm Sĩ Can Trường': {
        name: 'Kiếm Sĩ Can Trường',
        description:
          'Một đòn tấn công mạnh mẽ với kiếm, thể hiện tinh thần không bao giờ khuất phục. (Gây 50 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 50,
          magic: 0,
        },
        type: ['steel'],
        use: 'active',
        countdown: 1,
        effect_callback: () => {},
      },
      'Tinh Thần Bất Khuất': {
        name: 'Tinh Thần Bất Khuất',
        description:
          'Khi hp giảm xuống dưới 20%, Chuột Dũng Cảm sẽ tăng tốc độ của mình, phản ánh khả năng phản ứng nhanh nhẹn trong tình thế nguy cấp. (Tăng 20% tốc độ và kích hoạt hiệu ứng Kiên Cường xoá bỏ mọi hiệu ứng bất lợi.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['light'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.current.hp * 0.2) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.speed += self.stats.speed * 0.2;
                self.current.adverseEffect = [];
              },
              duration: 0, // 0 turn
            });
          }
        },
      },
    },
  },
  'Ếch Ninja': {
    name: 'Ếch Ninja',
    description:
      'Ếch Ninja là biểu tượng của sự nhanh nhẹn và bí ẩn, sở hữu kỹ năng lẻn lút và chiến đấu tuyệt vời.',
    lore: 'Ếch Ninja là một Enti thuộc hệ Nước và Bóng Tối. Sinh ra trong bóng đêm của khu rừng mưa nhiệt đới, nó đã được huấn luyện bởi những ninja huyền thoại để trở thành một chiến binh vô hình. Ếch Ninja sử dụng môi trường xung quanh để ẩn mình và tập trung vào việc tạo ra những đòn tấn công bất ngờ.',
    stats: {
      hp: 220,
      physical_dame: 35,
      magic_dame: 45,
      physical_def: 30,
      magic_def: 40,
      speed: 50,
    },
    type: ['water', 'dark'],
    skills: {
      'Kiếm Thuật Bóng Tối': {
        name: 'Kiếm Thuật Bóng Tối',
        description:
          'Ếch Ninja sử dụng kiếm thuật bóng tối để tấn công, gây sát thương lớn lên kẻ địch. (Gây 60 sát thương vật lý và 30 phép thuật.)',
        target: ['enemy'],
        damage: {
          physical: 60,
          magic: 30,
        },
        type: ['dark'],
        use: 'active',
        countdown: 2,
        effect_callback: () => {},
      },
      'Ẩn Mình': {
        name: 'Ẩn Mình',
        description:
          'Ếch Ninja sử dụng kỹ năng để trở nên vô hình trước mắt kẻ địch, tăng khả năng né tránh. (Tăng khả năng né tránh bằng 50% tốc độ của Ếch Ninja trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.dodge += self.stats.speed * 0.5;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Làn Sương Mù': {
        name: 'Làn Sương Mù',
        description:
          'Tạo ra một làn sương mù dày đặc xung quanh, làm giảm tầm nhìn và sát thương của toàn kẻ địch. (Giảm 20% sát thương phép và vật lý của kẻ địch trong 4 lượt. Có 50% khả năng khiến chúng bị bối rối.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.physical_dame -= enemy.stats.physical_dame * 0.2;
                enemy.current.magic_dame -= enemy.stats.magic_dame * 0.2;
                if (Math.random() < 0.5) {
                  enemy.current.adverseEffect.push('confuse');
                }
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
      'Phản Đòn Bóng Tối': {
        name: 'Phản Đòn Bóng Tối',
        description:
          'Khi bị tấn công, Ếch Ninja có cơ hội phản đòn bằng một đòn tấn công bóng tối, gây sát thương và làm chậm kẻ địch. (Gây 40 sát thương vật lý và 20 sát thương phép và làm chậm kẻ địch 10%.)',
        target: ['enemy'],
        damage: {
          physical: 40,
          magic: 20,
        },
        type: ['dark'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self, enemy }) => {
          if (self.current.isAttacked === true) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.1;
              },
              duration: 4, // 4 turn
            });
          }
        },
      },
    },
  },
  'Quỷ Lùn': {
    name: 'Quỷ Lùn',
    description:
      'Quỷ Lùn là hình ảnh của sự mạnh mẽ và quyết liệt, với khả năng chiến đấu và phép thuật đặc biệt, bất chấp kích thước nhỏ bé của mình.',
    lore: 'Sinh ra từ vùng đất đầy lửa và sulfur, Quỷ Lùn là một Enti thuộc hệ Lửa và Bóng Tối. Với sức mạnh được rèn giũa qua hàng trăm năm, nó có khả năng chịu đựng và sức mạnh phi thường, cùng với khả năng sử dụng phép thuật đen tối.',
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
          'Quỷ Lùn triệu hồi ngọn lửa từ địa ngục, gây sát thương lớn lên kẻ địch ở cạnh bên. (Gây 70 sát thương phép và thiêu đốt kẻ địch xung quanh trong 4 lượt.)',
        target: ['around_enemies'],
        damage: {
          physical: 0,
          magic: 70,
        },
        type: ['fire'],
        use: 'active',
        countdown: 2,
        effect_callback: ({ around_enemies }) => {
          around_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('burn');
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
      'Bóng Đêm Bất Tận': {
        name: 'Bóng Đêm Bất Tận',
        description:
          'Bao phủ mục tiêu trong bóng tối, làm chậm và suy yếu chúng. (Giảm 10% tốc độ và 15% sức tấn công vật lý của kẻ địch.)',
        target: ['around_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ around_enemies }) => {
          around_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.1;
                enemy.current.physical_dame -= enemy.stats.physical_dame * 0.15;
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
      'Ánh Sáng Lấp Lánh': {
        name: 'Ánh Sáng Lấp Lánh',
        description:
          'Quỷ Lùn sử dụng ánh sáng lấp lánh để mê hoặc và làm lạc hướng kẻ địch, tạo cơ hội tấn công. (80% Làm choáng kẻ địch trong 3 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.8) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 3, // 3 turn
            });
          }
        },
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
          'Một đòn chém mạnh mẽ với thanh kiếm hải tặc, thể hiện sự dũng mãnh và không sợ hãi. (Gây 80 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 80,
          magic: 0,
        },
        type: ['adventure'],
        use: 'active',
        countdown: 2,
        effect_callback: () => {},
      },
      'Hô Hào Thủy Thủ': {
        name: 'Hô Hào Thủy Thủ',
        description:
          'Tăng cường tinh thần cho đồng đội, hô hào họ chiến đấu mạnh mẽ hơn. (Tăng 20% sức mạnh tấn công vật lý cho đồng minh.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['adventure'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_dame += ally.stats.physical_dame * 0.2;
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
      'Phiêu Lưu Mạo Hiểm': {
        name: 'Phiêu Lưu Mạo Hiểm',
        description:
          'Heo Hải Tặc dùng trí tuệ và sự nhanh nhẹn của mình để né tránh các cuộc tấn công, tăng khả năng né tránh. (Tăng 25% khả năng né tránh.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['adventure'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.dodge += self.current.dodge * 0.25;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Lời Nguyền Biển Cả': {
        name: 'Lời Nguyền Biển Cả',
        description:
          'Gọi lời nguyền của biển cả để làm chậm và yếu đi kẻ địch, giảm tốc độ và sức mạnh tấn công của chúng. (Giảm 10% tốc độ và 15% sức mạnh tấn công của kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.speed -= enemy.stats.speed * 0.1;
              enemy.current.physical_dame -= enemy.stats.physical_dame * 0.15;
            },
            duration: 4, // 4 turn
          });
        },
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
          'Lửng Mật Vô Đối sử dụng kiếm mật ong của mình để tấn công, gây sát thương lớn và có khả năng làm chậm đối thủ. (Gây 90 sát thương vật lý và giảm 10% tốc độ đối thủ.)',
        target: ['enemy'],
        damage: {
          physical: 90,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 2,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.speed -= enemy.stats.speed * 0.1;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Giáp Tổ Ong': {
        name: 'Giáp Tổ Ong',
        description:
          'Bảo vệ bản thân với bộ giáp tổ ong cứng cáp, giảm sát thương nhận vào từ mọi nguồn. (Tạo giáp ảo bằng 30% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.3;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Đòn Tấn Công Vô Đối': {
        name: 'Đòn Tấn Công Vô Đối',
        description:
          'Một cú đấm mạnh mẽ, thể hiện sức mạnh vô đối của Lửng Mật, có khả năng gây choáng. (Gây 100 sát thương vật lý và có 15% cơ hội làm choáng đối thủ.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 1,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.15) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 3, // 3 turn
            });
          }
        },
      },
      'Bất Diệt': {
        name: 'Bất Diệt',
        description:
          'Khi hp giảm xuống dưới 25%, Lửng Mật Vô Đối sẽ hồi phục một lượng hp nhất định, phản ánh khả năng phục hồi kỳ diệu của nó, giảm sát thương nhận vào. (Hồi 20% hp và tăng phòng thủ vật lý và phép thêm 20%.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['honey'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.25) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.hp += self.stats.hp * 0.2;
                self.current.physical_def += self.stats.physical_def * 0.2;
                self.current.magic_def += self.stats.magic_def * 0.2;
              },
              duration: 0, // 0 turn
            });
          }
        },
      },
    },
  },
  'Quala Nhi': {
    name: 'Quala Nhi',
    description:
      'Quala Nhi là một chiến binh dũng cảm với bàn tay cụt, vẫn không ngừng chiến đấu bất chấp mọi thách thức. Mang theo thanh kiếm siêu bự, biểu tượng của sức mạnh vô biên, cùng với người bạn đồng hành là một con chim điêu lớn, Quala Nhi sẵn sàng đối mặt với bất kỳ kẻ thù nào.',
    lore: 'Sau một trận chiến ác liệt, Quala Nhi đã mất đi bàn tay của mình nhưng không vì thế mà gục ngã. Qua quá trình rèn luyện gian khổ, nó đã trở nên mạnh mẽ hơn bao giờ hết. Con chim điêu lớn không chỉ là người bạn đồng hành mà còn là biểu tượng của tinh thần không khuất phục trước số phận.',
    stats: {
      hp: 350,
      physical_dame: 100,
      magic_dame: 0,
      physical_def: 80,
      magic_def: 60,
      speed: 45,
    },
    type: ['earth', 'wind'],
    skills: {
      'Đạn Chỉ Thần Công': {
        name: 'Đạn Chỉ Thần Công',
        description:
          'Quala Nhi tung ta một cú chưởng mạnh mẽ, gây sát thương lớn lên kẻ địch. (Gây 120 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 120,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 3,
        effect_callback: () => {},
      },
      'Bảo Vệ Bầu Trời': {
        name: 'Bảo Vệ Bầu Trời',
        description:
          'Quala Nhi và chim điêu lớn phối hợp tạo ra một lớp lá chắn, giảm sát thương nhận vào từ kẻ địch. (Tạo giáp ảo bằng 25% hp cho bản thân.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['wind'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.25;
            },
            duration: 0, // 0 turn
          });
        },
      },
      'Cuộc Tấn Công Từ Trên Cao': {
        name: 'Cuộc Tấn Công Từ Trên Cao',
        description:
          'Chim điêu lớn lao xuống từ bầu trời, gây sát thương lớn và có khả năng làm choáng kẻ địch với một cú đánh mạnh mẽ. (Gây 80 sát thương vật lý và có 20% cơ hội làm choáng kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 80,
          magic: 0,
        },
        type: ['wind'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.2) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 2, // 2 turn
            });
          }
        },
      },
      'Tinh Thần Chiến Binh': {
        name: 'Tinh Thần Chiến Binh',
        description:
          'Khi hp giảm xuống dưới 30%, Quala Nhi tăng đáng kể sức mạnh tấn công vật lý của mình, phản ánh ý chí kiên cường chiến đấu đến cùng. (Tăng 30% sức mạnh tấn công vật lý trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.3) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.physical_dame += self.stats.physical_dame * 0.3;
              },
              duration: 3, // 3 turn
            });
          }
        },
      },
    },
  },

  'Dơi Siêu Âm': {
    name: 'Dơi Siêu Âm',
    description:
      'Dơi Siêu Âm là sinh vật của bóng tối, sử dụng khả năng siêu âm để định vị và tấn công mục tiêu. Sự linh hoạt và tốc độ làm nên thế mạnh không thể ngờ của nó trong bóng tối.',
    lore: 'Sinh ra từ những hang động sâu thẳm và tối tăm nhất, Dơi Siêu Âm đã phát triển khả năng siêu âm để thích nghi với môi trường sống không ánh sáng. Nó dùng khả năng này để săn mồi và tránh kẻ thù, biến bóng tối thành lợi thế của mình.',
    stats: {
      hp: 250,
      physical_dame: 70,
      magic_dame: 50,
      physical_def: 40,
      magic_def: 60,
      speed: 90,
    },
    type: ['dark', 'sound'],
    skills: {
      'Tiếng Vang Huyền Bí': {
        name: 'Tiếng Vang Huyền Bí',
        description:
          'Dơi Siêu Âm phát ra một luồng siêu âm mạnh mẽ, gây sát thương và làm choáng kẻ địch trong phạm vi rộng. (Gây 60 sát thương ma thuật và làm choáng kẻ địch trong 2 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 60,
        },
        type: ['sound'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 2,
            });
          });
        },
      },
      'Bức Bình Phong Âm': {
        name: 'Bức Bình Phong Âm',
        description:
          'Tạo ra một bức bình phong âm thanh xung quanh, tăng khả năng né tránh và giảm sát thương nhận vào. (Tăng 20% khả năng né tránh và tăng 15% phòng thủ vật lý và phép.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['sound'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.dodge += self.stats.speed * 0.2;
              self.current.physical_def += self.stats.physical_def * 0.15;
              self.current.magic_def += self.stats.magic_def * 0.15;
            },
            duration: 3,
          });
        },
      },
      'Hút Máu': {
        name: 'Hút Máu',
        description:
          'Dơi Siêu Âm tấn công kẻ địch, hồi phục hp dựa vào sát thương gây ra. (Gây 50 sát thương vật lý và hồi phục 25% hp của sát thương gây ra.)',
        target: ['enemy'],
        damage: {
          physical: 50,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 2,
        effect_callback: ({ self, enemy }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.hp += enemy.current.receive_damage * 0.25;
            },
            duration: 0,
          });
        },
      },
      'Dấu Ấn Bóng Tối': {
        name: 'Dấu Ấn Bóng Tối',
        description:
          'Đánh dấu kẻ địch bằng dấu ấn bóng tối, tăng sát thương nhận vào từ Dơi Siêu Âm. (Tăng 20% sát thương nhận vào từ Dơi Siêu Âm trong 4 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.receive_damage_ratio += 0.2;
            },
          });
        },
      },
    },
  },
  'Sư Tử Sấm Sét': {
    name: 'Sư Tử Sấm Sét',
    description:
      'Sư Tử Sấm Sét là vua của bầu trời đêm, mang theo sức mạnh của sấm sét và bão tố. Với bộ lông phát sáng như tia chớp, nó là biểu tượng của sức mạnh và uy quyền.',
    lore: 'Sư Tử Sấm Sét từng là một linh hồn của bầu trời, được thần Zeus ban cho sức mạnh vô song. Nó điều khiển sấm sét, bảo vệ vùng đất của mình khỏi mọi kẻ xâm lược, và giúp đỡ những kẻ yếu thế với sức mạnh của mình.',
    stats: {
      hp: 300,
      physical_dame: 75,
      magic_dame: 50,
      physical_def: 60,
      magic_def: 55,
      speed: 40,
    },
    type: ['thunder', 'light'],
    skills: {
      'Dấu Ấn Sấm Sét': {
        name: 'Dấu Ấn Sấm Sét',
        description:
          'Sư Tử Sấm Sét triệu hồi sấm sét từ bầu trời, gây sát thương lớn và làm choáng kẻ địch. (Gây 100 sát thương phép và có 30% cơ hội làm choáng kẻ địch trong 2 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 100,
        },
        type: ['thunder'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.3) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 2,
            });
          }
        },
      },
      'Bão Tố Bảo Vệ': {
        name: 'Bão Tố Bảo Vệ',
        description:
          'Tạo ra một bão tố xung quanh bản thân, giảm sát thương nhận vào và phản đòn sát thương cho kẻ địch. (Giảm 20% sát thương nhận vào và phản lại 30% sát thương nhận vào cho kẻ địch trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['thunder'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.defense_bonus += 0.2;
              self.current.reflect_damage_ratio += 0.3;
            },
            duration: 3,
          });
        },
      },
      'Tiếng Gầm Sấm Sét': {
        name: 'Tiếng Gầm Sấm Sét',
        description:
          'Sư Tử Sấm Sét gầm lên mạnh mẽ, tăng sức mạnh cho bản thân và đồng minh. (Tăng 20% sức mạnh tấn công vật lý và phép thuật cho bản thân và đồng minh trong 4 lượt.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['thunder'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.2;
              self.current.magic_dame += self.stats.magic_dame * 0.2;
            },
            duration: 4,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_dame += ally.stats.physical_dame * 0.2;
                ally.current.magic_dame += ally.stats.magic_dame * 0.2;
              },
              duration: 4,
            });
          });
        },
      },
      'Sức Mạnh Sét Đánh': {
        name: 'Sức Mạnh Sét Đánh',
        description:
          'Khi hp giảm xuống dưới 50%, Sư Tử Sấm Sét kích hoạt sức mạnh sét đánh, tăng đáng kể tốc độ và sát thương của mình. (Tăng 50% tốc độ và 25% sát thương vật lý và phép thuật trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['thunder'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.5) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.speed += self.stats.speed * 0.5;
                self.current.physical_dame += self.stats.physical_dame * 0.25;
                self.current.magic_dame += self.stats.magic_dame * 0.25;
              },
              duration: 3,
            });
          }
        },
      },
    },
  },
  'Mèo Phù Thủy Đêm': {
    name: 'Mèo Phù Thủy Đêm',
    description:
      'Mèo Phù Thủy Đêm là sinh vật bí ẩn của bóng tối, chủ nhân của những phép thuật và bùa chú mạnh mẽ. Với đôi mắt lấp lánh dưới ánh trăng, nó có khả năng nhìn thấu tất cả âm mưu và bóng tối.',
    lore: 'Sinh ra từ một thế giới ma thuật, Mèo Phù Thủy Đêm là vị pháp sư quyền năng nhất trong đêm tối. Nó dùng khả năng của mình để cân bằng lực lượng giữa ánh sáng và bóng tối, bảo vệ thế giới khỏi các thế lực đen tối.',
    stats: {
      hp: 250,
      physical_dame: 30,
      magic_dame: 80,
      physical_def: 40,
      magic_def: 60,
      speed: 70,
    },
    type: ['dark', 'magic'],
    skills: {
      'Ánh Trăng Phù Thủy': {
        name: 'Ánh Trăng Phù Thủy',
        description:
          'Mèo Phù Thủy Đêm triệu hồi ánh trăng bí ẩn, tăng cường phép thuật cho bản thân và đồng minh. (Tăng 25% sát thương phép thuật trong 3 lượt và hồi phục 10% HP mỗi lượt.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 25,
        },
        type: ['magic'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.magic_dame += self.stats.magic_dame * 0.25;
              self.current.hp += self.stats.hp * 0.1;
            },
            duration: 3,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.magic_dame += ally.stats.magic_dame * 0.25;
                ally.current.hp += ally.stats.hp * 0.1;
              },
              duration: 3,
            });
          });
        },
      },
      'Bùa Chú Bóng Đêm': {
        name: 'Bùa Chú Bóng Đêm',
        description:
          'Phủ một lớp bóng tối xung quanh kẻ địch, làm chậm và giảm phòng thủ của chúng. (Giảm 20% tốc độ và phòng thủ vật lý của kẻ địch trong 2 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.2;
                enemy.current.physical_def -= enemy.stats.physical_def * 0.2;
              },
              duration: 2,
            });
          });
        },
      },
      'Mắt Thần': {
        name: 'Mắt Thần',
        description:
          'Mèo Phù Thủy Đêm sử dụng khả năng nhìn xuyên thấu, tiết lộ vị trí và điểm yếu của kẻ địch. (Tăng 30% tỉ lệ chí mạng cho bản thân trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['magic'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.crit_rate += 0.3;
            },
            duration: 4,
          });
        },
      },
      'Tiếng Meo Ma Mị': {
        name: 'Tiếng Meo Ma Mị',
        description:
          'Mèo Phù Thủy Đêm phát ra tiếng meo ma mị, làm choáng và sợ hãi kẻ địch. (Có 50% cơ hội làm choáng kẻ địch trong 1 lượt và giảm 20% tốc độ của chúng trong 2 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            if (Math.random() < 0.5) {
              enemy.current.effect.push({
                effect: ({ enemy }) => {
                  enemy.current.adverseEffect.push('stun');
                  enemy.current.speed -= enemy.stats.speed * 0.2;
                },
                duration: 1,
              });
            } else {
              enemy.current.effect.push({
                effect: ({ enemy }) => {
                  enemy.current.speed -= enemy.stats.speed * 0.2;
                },
                duration: 2,
              });
            }
          });
        },
      },
    },
  },
  'Quả Dứa Chiến Binh Mùa Hè': {
    name: 'Quả Dứa Chiến Binh Mùa Hè',
    description:
      'Quả Dứa Chiến Binh Mùa Hè là biểu tượng của sức sống và năng lượng, luôn sẵn sàng cho mọi cuộc phiêu lưu dưới ánh mặt trời rực rỡ của mùa hè.',
    lore: 'Sinh ra từ khu vườn nhiệt đới thần kỳ, Quả Dứa Chiến Binh Mùa Hè không chỉ mang vẻ đẹp rực rỡ mà còn sở hữu sức mạnh mùa hè, bảo vệ mọi sinh vật trước những thách thức. Với vũ khí là chiếc khiên surfboard và kính râm, nó chứng minh rằng sự vui vẻ và dũng cảm có thể đi đôi với nhau.',
    stats: {
      hp: 250,
      physical_dame: 50,
      magic_dame: 70,
      physical_def: 40,
      magic_def: 60,
      speed: 30,
    },
    type: ['summer', 'tropical'],
    skills: {
      'Nắng Gắt': {
        name: 'Nắng Gắt',
        description:
          'Tập trung sức mạnh của mặt trời, gây sát thương phép lớn lên đối thủ và có khả năng làm chúng chói mắt, giảm độ chính xác. (Gây 80 sát thương phép và có 50% cơ hội làm chói mắt đối thủ trong 4 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 80,
        },
        type: ['summer'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.5) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.accuracy -= enemy.stats.accuracy * 0.5;
              },
              duration: 4, // 4 turn
            });
          }
        },
      },
      'Sóng Biển': {
        name: 'Sóng Biển',
        description:
          'Gọi sóng biển mạnh mẽ, tạo ra một làn sóng lớn làm choáng và gây sát thương vật lý cho nhiều kẻ địch cùng lúc. (Gây 60 sát thương vật lý và có 50% cơ hội làm choáng kẻ địch.)',
        target: ['all_enemies'],
        damage: {
          physical: 60,
          magic: 0,
        },
        type: ['tropical'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            if (Math.random() < 0.5) {
              enemy.current.effect.push({
                effect: ({ enemy }) => {
                  enemy.current.adverseEffect.push('stun');
                },
                duration: 2, // 2 turn
              });
            }
          });
        },
      },
      'Hơi Thở Mùa Hè': {
        name: 'Hơi Thở Mùa Hè',
        description:
          'Phục hồi hp cho bản thân và đồng minh, thể hiện sức sống dồi dào của mùa hè. (Hồi 15% hp cho bản thân và 10% hp cho đồng minh.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['summer'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.hp += self.stats.hp * 0.15;
            },
            duration: 0, // 0 turn
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.hp += ally.stats.hp * 0.1;
              },
              duration: 0, // 0 turn
            });
          });
        },
      },
      'Ánh Dương Chói Lọi': {
        name: 'Ánh Dương Chói Lọi',
        description:
          'Tăng cường sức mạnh tấn công và phòng thủ cho bản thân, phản ánh khả năng chiến đấu kiên cường dưới ánh nắng mặt trời. (Tăng 20% sức mạnh tấn công và phòng thủ vật lý và phép trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['summer'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.2;
              self.current.magic_dame += self.stats.magic_dame * 0.2;
              self.current.physical_def += self.stats.physical_def * 0.2;
              self.current.magic_def += self.stats.magic_def * 0.2;
            },
            duration: 4, // 4 turn
          });
        },
      },
    },
  },
  'Khỉ Siêu Trộm': {
    name: 'Khỉ Siêu Trộm',
    description:
      'Khỉ Siêu Trộm là một hình ảnh độc đáo với chiếc đít đỏ nổi bật, mặc giáp và cầm song kiếm, đứng trên thảm bay ma thuật. Nó biểu tượng cho sự nhanh nhẹn, khéo léo và sự tự do, luôn sẵn sàng cho những cuộc phiêu lưu mới.',
    lore: 'Khỉ Siêu Trộm xuất thân từ một gia tộc trộm cắp huyền thoại, nó đã được huấn luyện từ nhỏ để trở thành tên trộm giỏi nhất. Với khả năng di chuyển linh hoạt trên thảm bay và sử dụng song kiếm với kỹ năng điêu luyện, nó đã thực hiện hàng loạt vụ trộm không tưởng.',
    stats: {
      hp: 280,
      physical_dame: 85,
      magic_dame: 0,
      physical_def: 70,
      magic_def: 60,
      speed: 90,
    },
    type: ['wind', 'stealth'],
    skills: {
      'Vũ Đạo Kiếm': {
        name: 'Vũ Đạo Kiếm',
        description:
          'Khỉ Siêu Trộm thực hiện một loạt đòn tấn công nhanh như chớp với song kiếm, gây sát thương lớn và có khả năng làm choáng kẻ địch. (Gây 95 sát thương vật lý và có 25% cơ hội làm choáng kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 95,
          magic: 0,
        },
        type: ['wind'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.25) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 2, // 2 turn
            });
          }
        },
      },
      'Thoát Thân Ma Thuật': {
        name: 'Thoát Thân Ma Thuật',
        description:
          'Sử dụng thảm bay để thoát khỏi tình thế nguy hiểm, tăng khả năng né tránh cho bản thân trong vòng vài lượt. (Tăng 50% khả năng né tránh trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['stealth'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.dodge += self.stats.speed * 0.5;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Âm Dương Song Kiếm': {
        name: 'Âm Dương Song Kiếm',
        description:
          'Khỉ Siêu Trộm kết hợp năng lượng âm dương từ song kiếm, tạo ra một đòn tấn công mạnh mẽ, gây sát thương lớn và giảm phòng thủ của kẻ địch. (Gây 100 sát thương vật lý và giảm 20% phòng thủ vật lý của kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['wind'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.physical_def -= enemy.stats.physical_def * 0.2;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Trộm Cắp Bậc Thầy': {
        name: 'Trộm Cắp Bậc Thầy',
        description:
          'Khỉ Siêu Trộm sử dụng kỹ năng trộm cắp của mình để "vô hiệu hóa" một kỹ năng ngẫu nhiên của kẻ địch trong vài lượt. (Vô hiệu hóa một kỹ năng ngẫu nhiên của kẻ địch trong vài lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['stealth'],
        use: 'active',
        countdown: 6,
        effect_callback: ({ enemy }) => {
          const randomSkill = Math.floor(Math.random() * 4);
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.skills[randomSkill].countdown = 10;
            },
            duration: 3, // 3 turn
          });
        },
      },
    },
  },
  'Bảo Mẫu Rồng': {
    name: 'Bảo Mẫu Rồng',
    description:
      'Bảo Mẫu Rồng là hình mẫu của sự mạnh mẽ và ân cần, với khả năng bảo vệ và chăm sóc những đứa con rồng nhỏ với lòng dũng cảm và tình thương mến vô bờ bến.',
    lore: 'Bảo Mẫu Rồng từng là một chiến binh huyền thoại, nay đã trở thành người bảo vệ cho lũ rồng con. Trải qua nhiều thế hệ, cô đã dạy dỗ những đứa trẻ rồng cách chiến đấu và sống sót trong thế giới đầy rẫy nguy hiểm, đồng thời truyền lại cho chúng tinh thần không bao giờ khuất phục.',
    stats: {
      hp: 300,
      physical_dame: 70,
      magic_dame: 90,
      physical_def: 80,
      magic_def: 85,
      speed: 40,
    },
    type: ['fire', 'magic'],
    skills: {
      'Bảo Hộ Phép Thuật': {
        name: 'Bảo Hộ Phép Thuật',
        description:
          'Tạo một lá chắn phép thuật bảo vệ bản thân và đồng minh, giảm thiểu sát thương từ kẻ địch. (Tạo giáp ảo bằng 30% hp cho bản thân và đồng minh.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['magic'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.3;
            },
            duration: 3,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.shield += ally.stats.hp * 0.3;
              },
              duration: 3,
            });
          });
        },
      },
      'Hỏa Diệm Sư': {
        name: 'Hỏa Diệm Sư',
        description:
          'Phóng một quả cầu lửa mạnh mẽ vào kẻ địch, gây sát thương lớn và có cơ hội thiêu đốt chúng. (Gây 80 sát thương phép và có 20% cơ hội thiêu đốt kẻ địch trong 2 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 80,
        },
        type: ['fire'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.2) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('burn');
              },
              duration: 2,
            });
          }
        },
      },
      'Lời Ru Của Mẹ': {
        name: 'Lời Ru Của Mẹ',
        description:
          'Sử dụng khả năng chữa lành tự nhiên để hồi phục hp cho bản thân và đồng minh. (Hồi 50 hp cho bản thân và mỗi đồng minh.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['heal'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self, allies }) => {
          self.current.hp += 50;
          allies.forEach((ally) => {
            ally.current.hp += 50;
          });
        },
      },
      'Nghị Lực Bất Diệt': {
        name: 'Nghị Lực Bất Diệt',
        description:
          'Khi hp giảm xuống dưới 20%, Bảo Mẫu Rồng sẽ tăng mạnh sức mạnh phòng thủ của mình, phản ánh ý chí kiên cường để bảo vệ lũ rồng con. (Tăng 50% phòng thủ vật lý và phép thuật khi hp dưới 20%.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['heal'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.current.hp * 0.2) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.physical_def += self.stats.physical_def * 0.5;
                self.current.magic_def += self.stats.magic_def * 0.5;
              },
              duration: 3, // 3 turn
            });
          }
        },
      },
    },
  },
  'Gà Quả Cảm': {
    name: 'Gà Quả Cảm',
    description:
      'Gà Quả Cảm là biểu tượng của lòng dũng cảm và sự kiên cường, không ngại đối mặt với bất kỳ kẻ thù nào trên chiến trường.',
    lore: 'Sinh ra trong một làng gà bình dị nhưng với bản tính quả cảm, Gà Quả Cảm đã lên đường hành hiệp trượng nghĩa, bảo vệ làng mạc khỏi những kẻ xâm lược. Nó được trang bị bộ giáp nhẹ và thanh kiếm của chiến binh, luôn sẵn lòng chiến đấu vì công lý và bảo vệ yếu thế.',
    stats: {
      hp: 150,
      physical_dame: 50,
      magic_dame: 0,
      physical_def: 40,
      magic_def: 30,
      speed: 60,
    },
    type: ['valor', 'steel'],
    skills: {
      'Kiếm Sĩ Dũng Cảm': {
        name: 'Kiếm Sĩ Dũng Cảm',
        description:
          'Gà Quả Cảm dùng thanh kiếm của mình tấn công kẻ địch, thể hiện kỹ năng chiến đấu xuất sắc. (Gây 70 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 70,
          magic: 0,
        },
        type: ['valor'],
        use: 'active',
        countdown: 2,
        effect_callback: () => {},
      },
      'Hộ Vệ Quả Cảm': {
        name: 'Hộ Vệ Quả Cảm',
        description:
          'Tạo ra một lá chắn bảo vệ bản thân và đồng minh, phản ánh ý chí kiên cường không gục ngã. (Tạo giáp ảo bằng 20% hp cho bản thân và đồng minh.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['steel'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.2;
            },
            duration: 4, // 4 turn
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.shield += ally.stats.hp * 0.2;
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
      'Tiếng Gáy Thách Thức': {
        name: 'Tiếng Gáy Thách Thức',
        description:
          'Gà Quả Cảm phát ra tiếng gáy mạnh mẽ, tăng sức mạnh tấn công và tốc độ cho bản thân. (Tăng 15% sát thương vật lý và 10% tốc độ trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['valor'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.15;
              self.current.speed += self.stats.speed * 0.1;
            },
            duration: 3, // 3 turn
          });
        },
      },
      'Bảo Vệ Làng Mạc': {
        name: 'Bảo Vệ Làng Mạc',
        description:
          'Gà Quả Cảm sử dụng sức mạnh của mình để bảo vệ mọi người, giảm sát thương nhận vào từ kẻ địch. (Tăng 20% phòng thủ cho đồng minh trong 4 lượt.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['steel'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_def += ally.stats.physical_def * 0.2;
                ally.current.magic_def += ally.stats.magic_def * 0.2;
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
    },
  },
  'Gấu Bảo Vệ': {
    name: 'Gấu Bảo Vệ',
    description:
      'Gấu Bảo Vệ là hình ảnh của sức mạnh và lòng trung thành, luôn sẵn lòng đứng ra bảo vệ đồng đội với tấm khiên cứng cáp của mình.',
    lore: 'Gấu Bảo Vệ mang trên mình bộ giáp trung cổ và tấm khiên khổng lồ, là biểu tượng của sự kiên cường và không bao giờ khuất phục trước kẻ địch. Sinh ra trong rừng sâu, nó đã được huấn luyện để trở thành chiến binh vô đối, luôn đứng ở tuyến đầu trong mọi trận chiến.',
    stats: {
      hp: 350,
      physical_dame: 70,
      magic_dame: 0,
      physical_def: 80,
      magic_def: 50,
      speed: 30,
    },
    type: ['earth', 'steel'],
    skills: {
      'Khiên Bảo Vệ': {
        name: 'Khiên Bảo Vệ',
        description:
          'Gấu Bảo Vệ sử dụng tấm khiên của mình để tạo ra một lá chắn bảo vệ cho bản thân và đồng minh, giảm sát thương nhận vào từ kẻ địch. (Giảm 30% sát thương nhận vào cho bản thân và đồng minh trong 3 lượt.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['steel'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self, allies }) => {
              self.current.physical_def += self.stats.physical_def * 0.3;
              allies.forEach((ally) => {
                ally.current.physical_def += ally.stats.physical_def * 0.3;
              });
            },
            duration: 3,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_def += ally.stats.physical_def * 0.3;
              },
              duration: 3,
            });
          });
        },
      },
      'Đòn Tấn Công Mạnh Mẽ': {
        name: 'Đòn Tấn Công Mạnh Mẽ',
        description:
          'Gấu Bảo Vệ dùng sức mạnh to lớn của mình để tấn công một mục tiêu, gây sát thương lớn. (Gây 100 sát thương vật lý lên một kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 2,
        effect_callback: () => {},
      },
      'Phản Đòn': {
        name: 'Phản Đòn',
        description:
          'Khi bị tấn công, Gấu Bảo Vệ có cơ hội phản đòn, gây sát thương vật lý lên kẻ địch đã tấn công mình. (Có 20% cơ hội phản đòn, gây 50 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 50,
          magic: 0,
        },
        type: ['steel'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self, enemy }) => {
          if (self.current.isAttacked === true) {
            if (Math.random() < 0.2) {
              enemy.current.effect.push({
                effect: ({ enemy }) => {
                  enemy.current.hp -= 50;
                },
                duration: 0,
              });
            }
          }
        },
      },
      'Lòng Dũng Cảm': {
        name: 'Lòng Dũng Cảm',
        description:
          'Kích hoạt tinh thần chiến đấu không biết mệt mỏi, tăng sức mạnh và khả năng phòng thủ của bản thân. (Tăng 20% sức mạnh tấn công và phòng thủ vật lý trong 5 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.2;
              self.current.physical_def += self.stats.physical_def * 0.2;
            },
            duration: 5,
          });
        },
      },
    },
  },
  'Chiến Binh Lợn Lòi': {
    name: 'Chiến Binh Lợn Lòi',
    description:
      'Chiến Binh Lợn Lòi là hình ảnh của sức mạnh và dũng cảm, một chiến binh không biết đến sợ hãi, luôn dẫn đầu trong mọi trận chiến.',
    lore: 'Sinh ra và lớn lên trong những cánh rừng rậm rộng lớn, Chiến Binh Lợn Lòi đã trải qua không biết bao nhiêu trận chiến khốc liệt. Với bản lĩnh và sức mạnh phi thường, nó không chỉ là niềm tự hào của tộc lợn mà còn là nỗi khiếp sợ của kẻ địch.',
    stats: {
      hp: 320,
      physical_dame: 85,
      magic_dame: 0,
      physical_def: 70,
      magic_def: 50,
      speed: 40,
    },
    type: ['earth', 'warrior'],
    skills: {
      'Đòn Chém Mạnh Mẽ': {
        name: 'Đòn Chém Mạnh Mẽ',
        description:
          'Chiến Binh Lợn Lòi sử dụng lực lượng to lớn của mình để thực hiện một cú chém mạnh mẽ, gây sát thương lớn lên kẻ địch. (Gây 100 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 2,
        effect_callback: () => {},
      },
      'Lớp Giáp Cứng Rắn': {
        name: 'Lớp Giáp Cứng Rắn',
        description:
          'Tăng cường lớp giáp của mình, giảm sát thương nhận vào từ kẻ địch. (Tăng 25% phòng thủ vật lý trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['warrior'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_def += self.stats.physical_def * 0.25;
            },
            duration: 3, // 3 turn
          });
        },
      },
      'Tiếng Gầm Khiêu Khích': {
        name: 'Tiếng Gầm Khiêu Khích',
        description:
          'Phát ra tiếng gầm lớn, khiêu khích kẻ địch tấn công mình, giúp bảo vệ đồng minh. (Thu hút mọi sát thương về phía mình trong 2 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['warrior'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.isTaunting = true;
            },
            duration: 2, // 2 turn
          });
        },
      },
      'Đòn Phản Công': {
        name: 'Đòn Phản Công',
        description:
          'Khi bị tấn công, có cơ hội phản công lại ngay lập tức, gây sát thương vật lý cho kẻ địch. (Có 20% cơ hội phản công, gây 50 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 50,
          magic: 0,
        },
        type: ['earth'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self, enemy }) => {
          if (self.current.isAttacked === true) {
            if (Math.random() < 0.2) {
              enemy.current.hp -= 50; // Gây sát thương phản công
            }
          }
        },
      },
    },
  },
  'Gorilla Người Hỗ Trợ': {
    name: 'Gorilla Người Hỗ Trợ',
    description:
      'Gorilla Người Hỗ Trợ là biểu tượng của sức mạnh và lòng nhân ái, luôn sẵn lòng hỗ trợ và chữa lành cho đồng đội trong mọi tình huống.',
    lore: 'Sinh ra trong khu rừng rậm rộng lớn, Gorilla Người Hỗ Trợ có khả năng chữa lành đặc biệt và sức mạnh vô song, được tất cả các Enti khác ngưỡng mộ. Hành trình của nó không chỉ là chiến đấu mà còn là chăm sóc và bảo vệ đồng loại.',
    stats: {
      hp: 350,
      physical_dame: 50,
      magic_dame: 60,
      physical_def: 40,
      magic_def: 50,
      speed: 30,
    },
    type: ['nature', 'healing'],
    skills: {
      'Hồi Phục Tối Thượng': {
        name: 'Hồi Phục Tối Thượng',
        description:
          'Dùng năng lượng tự nhiên, Gorilla Người Hỗ Trợ chữa lành vết thương cho tất cả đồng minh, hồi phục một lượng lớn HP. (Hồi 25% HP cho tất cả đồng minh.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['healing'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.hp += ally.stats.hp * 0.25;
          });
        },
      },
      'Bảo Vệ Rừng Xanh': {
        name: 'Bảo Vệ Rừng Xanh',
        description:
          'Tạo ra một lá chắn từ năng lượng tự nhiên bảo vệ bản thân và đồng minh, giảm sát thương nhận vào. (Giảm 20% sát thương nhận vào cho bản thân và đồng minh trong 3 lượt.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['nature'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_def += self.stats.physical_def * 0.2;
              self.current.magic_def += self.stats.magic_def * 0.2;
            },
            duration: 3,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_def += ally.stats.physical_def * 0.2;
                ally.current.magic_def += ally.stats.magic_def * 0.2;
              },
              duration: 3,
            });
          });
        },
      },
      'Sức Mạnh Hỗ Trợ': {
        name: 'Sức Mạnh Hỗ Trợ',
        description:
          'Tăng cường sức mạnh và tốc độ cho đồng minh, thể hiện tinh thần đoàn kết và sức mạnh tập thể. (Tăng 15% sức mạnh tấn công và tốc độ cho đồng minh trong 4 lượt.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['support'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_dame += ally.stats.physical_dame * 0.15;
                ally.current.magic_dame += ally.stats.magic_dame * 0.15;
                ally.current.speed += ally.stats.speed * 0.15;
              },
              duration: 4,
            });
          });
        },
      },
      'Gầm Thét Động Viên': {
        name: 'Gầm Thét Động Viên',
        description:
          'Gorilla Người Hỗ Trợ gầm thét mạnh mẽ, tăng tinh thần chiến đấu, xoá bỏ mọi hiệu ứng bất lợi trên đồng minh. (Xoá bỏ tất cả hiệu ứng bất lợi trên đồng minh.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['support'],
        use: 'active',
        countdown: 6,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.adverseEffect = [];
          });
        },
      },
    },
  },
  'Hà Mã Đồ Long Đao': {
    name: 'Hà Mã Đồ Long Đao',
    description:
      'Hà Mã Đồ Long Đao là chiến binh hùng mạnh, mang trong mình sức mạnh của Đại Đao Đồ Long huyền thoại. Với bộ giáp cứng cáp và vũ khí lợi hại, Hà Mã Đồ Long Đao là đối thủ đáng gờm trên mọi chiến trường.',
    lore: 'Xuất thân từ lãnh địa bí ẩn, Hà Mã Đồ Long Đao đã chiến đấu qua bao trận mạc khốc liệt để chứng minh bản lĩnh và sức mạnh không gì sánh được của mình. Đại Đao Đồ Long mà nó sử dụng được cho là chứa đựng linh hồn của rồng, giúp nó cắt nát mọi khó khăn, thách thức.',
    stats: {
      hp: 350,
      physical_dame: 90,
      magic_dame: 0,
      physical_def: 60,
      magic_def: 40,
      speed: 30,
    },
    type: ['water', 'steel'],
    skills: {
      'Cú Chém Rồng Giáng': {
        name: 'Cú Chém Rồng Giáng',
        description:
          'Hà Mã Đồ Long Đao sử dụng Đại Đao Đồ Long chém mạnh xuống đất, tạo ra một làn sóng năng lượng rồng, gây sát thương vật lý lớn cho kẻ địch. (Gây 120 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 120,
          magic: 0,
        },
        type: ['steel'],
        use: 'active',
        countdown: 3,
        effect_callback: () => {},
      },
      'Giáp Rồng': {
        name: 'Giáp Rồng',
        description:
          'Hà Mã Đồ Long Đao kích hoạt năng lượng của Đại Đao Đồ Long để tạo ra một lớp giáp rồng bảo vệ, giảm sát thương nhận vào từ mọi nguồn. (Tạo giáp ảo bằng 30% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['steel'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.3;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Hơi Thở Rồng': {
        name: 'Hơi Thở Rồng',
        description:
          'Hà Mã Đồ Long Đao thở ra ngọn lửa rồng, gây sát thương ma thuật và có khả năng thiêu đốt kẻ địch. (Gây 80 sát thương ma thuật và có 30% cơ hội làm choáng kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 80,
        },
        type: ['fire'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.adverseEffect.push('burn');
            },
            duration: 3, // 3 turn
          });
        },
      },
      'Bước Chân Nặng Nề': {
        name: 'Bước Chân Nặng Nề',
        description:
          'Mỗi bước chân của Hà Mã Đồ Long Đao tạo ra rung động mạnh mẽ, có khả năng làm chậm tất cả kẻ địch xung quanh. (Giảm 20% tốc độ kẻ địch trong 3 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.2;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
    },
  },
  'Cáo Thư Sinh': {
    name: 'Cáo Thư Sinh',
    description:
      'Cáo Thư Sinh là hình ảnh của sự thông thái và uyên bác, mang trên mình Ỷ Thiên Kiếm, biểu tượng của sức mạnh và công lý. Với bộ áo choàng của thư sinh, Cáo Thư Sinh không chỉ sở hữu tri thức sâu rộng mà còn có khả năng chiến đấu xuất sắc.',
    lore: 'Sinh ra trong một gia đình có truyền thống học thuật, Cáo Thư Sinh từ nhỏ đã được dạy dỗ về tri thức và võ nghệ. Ỷ Thiên Kiếm, vũ khí mà nó mang theo, được truyền lại từ thế hệ này sang thế hệ khác, là biểu tượng của sự chính trực và bảo vệ công lý.',
    stats: {
      hp: 250,
      physical_dame: 70,
      magic_dame: 85,
      physical_def: 50,
      magic_def: 60,
      speed: 40,
    },
    type: ['light', 'knowledge'],
    skills: {
      'Chính Khí': {
        name: 'Chính Khí',
        description:
          'Cáo Thư Sinh phát huy chính khí từ Ỷ Thiên Kiếm, tăng sức mạnh cho bản thân và đồng minh. (Tăng 20% sát thương vật lý và ma thuật cho bản thân và đồng minh trong 3 lượt.)',
        target: ['self', 'allies'],
        damage: {
          physical: 20,
          magic: 20,
        },
        type: ['light'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.2;
              self.current.magic_dame += self.stats.magic_dame * 0.2;
            },
            duration: 3,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_dame += ally.stats.physical_dame * 0.2;
                ally.current.magic_dame += ally.stats.magic_dame * 0.2;
              },
              duration: 3,
            });
          });
        },
      },
      'Tri Thức Vô Biên': {
        name: 'Tri Thức Vô Biên',
        description:
          'Sử dụng kiến thức sâu rộng để phân tích điểm yếu của đối phương, tăng khả năng chí mạng cho bản thân. (Tăng 30% tỉ lệ chí mạng trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['knowledge'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.crit_rate += 0.3;
            },
            duration: 4,
          });
        },
      },
      'Kiếm Pháp Ỷ Thiên': {
        name: 'Kiếm Pháp Ỷ Thiên',
        description:
          'Thực hiện một đòn kiếm pháp mạnh mẽ từ Ỷ Thiên Kiếm, gây sát thương lớn và có khả năng làm choáng đối thủ. (Gây 100 sát thương vật lý và có 25% cơ hội làm choáng đối thủ trong 2 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['light'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.25) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 2,
            });
          }
        },
      },
      'Bảo Vệ Chính Nghĩa': {
        name: 'Bảo Vệ Chính Nghĩa',
        description:
          'Khi hp giảm xuống dưới 30%, Cáo Thư Sinh sẽ tăng đáng kể khả năng phòng thủ của mình, phản ánh ý chí kiên cường bảo vệ chính nghĩa. (Tăng 50% phòng thủ vật lý và ma thuật trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['light'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.3) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.physical_def += self.stats.physical_def * 0.5;
                self.current.magic_def += self.stats.magic_def * 0.5;
              },
              duration: 3,
            });
          }
        },
      },
    },
  },
  'Hải Cẩu Máu Liều': {
    name: 'Hải Cẩu Máu Liều',
    description:
      'Hải Cẩu Máu Liều là hình ảnh của sự dũng cảm và không biết sợ hãi, luôn sẵn lòng đối mặt với thách thức và chiến đấu cho lẽ phải.',
    lore: 'Hải Cẩu Máu Liều sinh ra trong một bản làng ven biển, nơi mà từ nhỏ nó đã học cách chiến đấu với những con sóng dữ. Với bản tính mạo hiểm và lòng dũng cảm, Hải Cẩu Máu Liều đã trở thành một huyền thoại trên biển cả, thách thức mọi kẻ thù dám đối đầu.',
    stats: {
      hp: 280,
      physical_dame: 75,
      magic_dame: 50,
      physical_def: 60,
      magic_def: 45,
      speed: 40,
    },
    type: ['water', 'adventure'],
    skills: {
      'Đòn Chí Mạng': {
        name: 'Đòn Chí Mạng',
        description:
          'Hải Cẩu Máu Liều tung ra một cú đánh mạnh mẽ bằng chiếc trượng của mình, gây sát thương lớn lên kẻ địch và có khả năng làm choáng. (Gây 100 sát thương vật lý và có 30% cơ hội làm choáng kẻ địch trong 2 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.adverseEffect.push('stun');
            },
            duration: 2, // 2 turn
          });
        },
      },
      'Hồi Máu Chiến Binh': {
        name: 'Hồi Máu Chiến Binh',
        description:
          'Hải Cẩu Máu Liều sử dụng khả năng hồi máu tự nhiên, phục hồi một phần hp cho bản thân trong mỗi lượt chiến đấu. (Hồi 5% hp mỗi lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          self.current.hp += self.stats.hp * 0.05;
        },
      },
      'Giáp Biển Cả': {
        name: 'Giáp Biển Cả',
        description:
          'Tạo ra một lớp giáp từ nước biển xung quanh, giảm sát thương nhận vào từ kẻ địch. (Tạo giáp ảo bằng 20% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.2;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Cuồng Phong Trên Biển': {
        name: 'Cuồng Phong Trên Biển',
        description:
          'Triệu hồi một cơn bão mạnh mẽ trên biển, gây sát thương và làm chậm tất cả kẻ địch trên sân. (Gây 75 sát thương ma thuật và giảm 15% tốc độ kẻ địch trong 3 lượt.) ',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 75,
        },
        type: ['water'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.15;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
    },
  },
  'Đội Trưởng Hải Cẩu': {
    name: 'Đội Trưởng Hải Cẩu',
    description:
      'Đội Trưởng Hải Cẩu là biểu tượng của uy quyền và lãnh đạo, dẫn dắt đoàn thủy thủ với trí tuệ và lòng dũng cảm.',
    lore: 'Sinh ra và lớn lên trên biển cả, Đội Trưởng Hải Cẩu đã trải qua nhiều trận sóng gió để trở thành thủ lĩnh của đoàn hải tặc. Với chiếc mũ đội trưởng và ống nhòm luôn bên mình, Đội Trưởng Hải Cẩu không chỉ là huyền thoại của biển cả mà còn là nguồn cảm hứng cho mọi thủy thủ.',
    stats: {
      hp: 320,
      physical_dame: 85,
      magic_dame: 55,
      physical_def: 65,
      magic_def: 50,
      speed: 35,
    },
    type: ['water', 'leadership'],
    skills: {
      'Hạm Đội Tấn Công': {
        name: 'Hạm Đội Tấn Công',
        description:
          'Triệu hồi hạm đội hải tặc để tấn công kẻ địch, gây sát thương lớn trên diện rộng. (Gây 110 sát thương vật lý cho tất cả kẻ địch.)',
        target: ['all_enemies'],
        damage: {
          physical: 110,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 4,
        effect_callback: () => {},
      },
      'Lệnh Hải Thuyền': {
        name: 'Lệnh Hải Thuyền',
        description:
          'Tăng tốc độ di chuyển và phòng thủ cho toàn bộ đồng minh, phản ánh khả năng lãnh đạo xuất sắc. (Tăng 20% tốc độ và phòng thủ vật lý và ma thuật cho toàn bộ đồng minh trong 4 lượt.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['leadership'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.speed += ally.stats.speed * 0.2;
                ally.current.physical_def += ally.stats.physical_def * 0.15;
                ally.current.magic_def += ally.stats.magic_def * 0.15;
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
      'Tinh Thần Bất Khuất': {
        name: 'Tinh Thần Bất Khuất',
        description:
          'Khi hp giảm xuống dưới 25%, Đội Trưởng Hải Cẩu sẽ hồi phục một lượng lớn hp, thể hiện ý chí kiên cường. (Hồi 30% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.25) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.hp += self.stats.hp * 0.3;
              },
              duration: 0, // Hiệu ứng tức thì
            });
          }
        },
      },
      'Quyết Định Lãnh Đạo': {
        name: 'Quyết Định Lãnh Đạo',
        description:
          'Phân phối lại lực lượng chiến đấu, tăng sức mạnh tấn công cho đồng minh có sức khỏe thấp nhất. (Tăng 25% sức mạnh tấn công cho đồng minh có sức khỏe thấp nhất trong 4 lượt.)',
        target: ['lowest_hp_ally'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['leadership'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ lowest_hp_ally }) => {
          lowest_hp_ally.current.effect.push({
            effect: ({ lowest_hp_ally }) => {
              lowest_hp_ally.current.physical_dame += lowest_hp_ally.stats.physical_dame * 0.25;
              lowest_hp_ally.current.magic_dame += lowest_hp_ally.stats.magic_dame * 0.25;
            },
            duration: 4, // 4 turn
          });
        },
      },
    },
  },
  'Kỵ Sĩ Bóng Đêm': {
    name: 'Kỵ Sĩ Bóng Đêm',
    description:
      'Kỵ Sĩ Bóng Đêm là chiến binh ẩn mình trong bóng tối, luôn sẵn lòng đương đầu với kẻ thù bằng sức mạnh và trí tuệ.',
    lore: 'Xuất thân từ vùng đất bị nguyền rủa, Kỵ Sĩ Bóng Đêm đã ký kết một giao ước với bóng tối để nhận lấy sức mạnh vô song. Anh ta chuyên điều khiển bóng đêm để tấn công kẻ địch và bảo vệ đồng minh, được mệnh danh là bảo hộ của ánh trăng.',
    stats: {
      hp: 250,
      physical_dame: 40,
      magic_dame: 50,
      physical_def: 30,
      magic_def: 40,
      speed: 25,
    },
    type: ['dark', 'mystic'],
    skills: {
      'Lưỡi Kiếm Bóng Tối': {
        name: 'Lưỡi Kiếm Bóng Tối',
        description:
          'Kỵ Sĩ Bóng Đêm tung ra một đòn kiếm nhanh như chớp, gây sát thương lớn và hấp thụ sức mạnh từ kẻ địch. (Gây 100 sát thương vật lý và hấp thụ 20% sát thương vật lý từ kẻ địch trong 3 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, enemy }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += enemy.stats.physical_dame * 0.2;
            },
            duration: 3, // 3 turn
          });
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.physical_dame -= enemy.stats.physical_dame * 0.2;
            },
            duration: 3, // 3 turn
          });
        },
      },
      'Áo Choàng Bóng Tối': {
        name: 'Áo Choàng Bóng Tối',
        description:
          'Tạo ra một lớp bảo vệ từ bóng tối xung quanh, giảm sát thương nhận vào và tăng khả năng né tránh. (Tạo giáp ảo bằng 20% hp và tăng 25% né tránh trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['dark'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.2;
              self.current.dodge += self.stats.speed * 0.25;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Gọi Hồn Bóng Đêm': {
        name: 'Gọi Hồn Bóng Đêm',
        description:
          'Triệu hồi các hồn ma từ bóng tối để tấn công kẻ địch, gây sát thương và làm chậm đối thủ. (Gây 85 sát thương ma thuật và giảm 20% tốc độ toàn bộ kẻ địch trong 3 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 85,
        },
        type: ['dark', 'mystic'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.2;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
      'Bảo Hộ Bóng Đêm': {
        name: 'Bảo Hộ Bóng Đêm',
        description:
          'Khi hp giảm xuống dưới 30%, Kỵ Sĩ Bóng Đêm tạo ra một lớp bảo hộ, giảm sát thương nhận vào và hồi phục hp. (Tạo giáp ảo bằng 30% hp và hồi 20% hp, tăng 20% phòng thủ vật lý và ma thuật.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['dark'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.3) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.shield += self.stats.hp * 0.3;
                self.current.hp += self.stats.hp * 0.2;
                self.current.physical_def += self.stats.physical_def * 0.2;
                self.current.magic_def += self.stats.magic_def * 0.2;
              },
              duration: 0, // Hiệu ứng tức thì
            });
          }
        },
      },
    },
  },
  'Vệ Binh Thời Gian': {
    name: 'Vệ Binh Thời Gian',
    description:
      'Vệ Binh Thời Gian là người canh giữ bí ẩn của không gian và thời gian, với khả năng kiểm soát và thao túng thời gian theo ý muốn.',
    lore: 'Vệ Binh Thời Gian xuất thân từ một thế giới nơi thời gian bị vặn vẹo và không tuân theo bất kỳ quy luật nào. Được chọn mặt gửi vàng để giữ vững trật tự thời gian, Vệ Binh đã trải qua hàng ngàn năm tu luyện, nắm giữ sức mạnh kiểm soát thời gian, có thể quay ngược lại quá khứ, tạm dừng hiện tại hoặc tăng tốc tương lai.',
    stats: {
      hp: 350,
      physical_dame: 60,
      magic_dame: 80,
      physical_def: 70,
      magic_def: 90,
      speed: 40,
    },
    type: ['time', 'mystic'],
    skills: {
      'Quay Ngược Thời Gian': {
        name: 'Quay Ngược Thời Gian',
        description:
          'Vệ Binh Thời Gian quay ngược thời gian để phục hồi hp cho bản thân và đồng minh, đồng thời xoá bỏ mọi hiệu ứng bất lợi. (Hồi 30% hp cho bản thân và 15% hp cho đồng minh, xoá bỏ mọi hiệu ứng bất lợi.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['time'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self, allies }) => {
          self.current.hp += self.stats.hp * 0.3;
          allies.forEach((ally) => {
            ally.current.hp += ally.stats.hp * 0.15;
            ally.current.adverseEffect = [];
          });
          self.current.adverseEffect = [];
        },
      },
      'Tạm Dừng': {
        name: 'Tạm Dừng',
        description:
          'Tạm dừng thời gian xung quanh mục tiêu, làm choáng chúng trong 2 lượt. (Làm choáng kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['time'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.adverseEffect.push('stun');
            },
            duration: 2,
          });
        },
      },
      'Tăng Tốc Tương Lai': {
        name: 'Tăng Tốc Tương Lai',
        description:
          'Tăng tốc thời gian cho đồng minh, tăng tốc độ và giảm countdown của kỹ năng. (Tăng 20% tốc độ và giảm 1 lượt countdown cho kỹ năng của đồng minh trong 3 lượt.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['time'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.speed += ally.stats.speed * 0.2;
                ally.current.skills.forEach((skill) => {
                  skill.current.countdown -= 1;
                });
              },
              duration: 3,
            });
          });
        },
      },
      'Bảo Vệ Thời Gian': {
        name: 'Bảo Vệ Thời Gian',
        description:
          'Khi hp giảm xuống dưới 30%, Vệ Binh Thời Gian tạo ra một lớp giáp thời gian, giảm sát thương nhận vào và hồi phục hp. (Tạo giáp ảo bằng 30% hp và hồi 20% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['time'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.3) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.shield += self.stats.hp * 0.3;
                self.current.hp += self.stats.hp * 0.2;
              },
              duration: 0,
            });
          }
        },
      },
    },
  },
  'Đại Bàng Tự Do': {
    name: 'Đại Bàng Tự Do',
    description:
      'Đại Bàng Tự Do là biểu tượng của sự tự do và mạnh mẽ, với đôi cánh rộng lớn và ánh mắt sắc sảo, thể hiện tinh thần không khuất phục.',
    lore: 'Đại Bàng Tự Do sinh ra từ những đỉnh núi cao nhất, nơi nó có thể bay lượn mà không bị bất kỳ sự ràng buộc nào. Nó là linh hồn của bầu trời, tự do và quyết đoán, luôn sẵn sàng bảo vệ lãnh thổ của mình khỏi bất kỳ kẻ xâm lược nào.',
    stats: {
      hp: 300,
      physical_dame: 80,
      magic_dame: 0,
      physical_def: 50,
      magic_def: 40,
      speed: 70,
    },
    type: ['wind', 'freedom'],
    skills: {
      'Cú Đâm Sấm Sét': {
        name: 'Cú Đâm Sấm Sét',
        description:
          'Đại Bàng Tự Do thực hiện một cú đâm nhanh như chớp, gây sát thương lớn và có khả năng làm choáng mục tiêu. (Gây 100 sát thương vật lý và có 25% cơ hội làm choáng kẻ địch trong 2 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['wind'],
        use: 'active',
        countdown: 2,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.25) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 2,
            });
          }
        },
      },
      'Tiếng Gọi Tự Do': {
        name: 'Tiếng Gọi Tự Do',
        description:
          'Phát ra tiếng gọi mạnh mẽ, tăng sức mạnh tấn công và tốc độ cho bản thân và đồng minh. (Tăng 20% sát thương vật lý và tốc độ cho bản thân và đồng minh trong 4 lượt.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['freedom'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.2;
              self.current.speed += self.stats.speed * 0.2;
            },
            duration: 4,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.physical_dame += ally.stats.physical_dame * 0.2;
                ally.current.speed += ally.stats.speed * 0.2;
              },
              duration: 4,
            });
          });
        },
      },
      'Vòng Xoáy Tự Do': {
        name: 'Vòng Xoáy Tự Do',
        description:
          'Tạo ra một vòng xoáy mạnh mẽ, gây sát thương lớn lên kẻ địch và làm chậm chúng. (Gây 120 sát thương vật lý và giảm 20% tốc độ kẻ địch trong 3 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 120,
          magic: 0,
        },
        type: ['wind'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.speed -= enemy.stats.speed * 0.2;
            },
            duration: 3,
          });
        },
      },
      'Bầu Trời Bất Diệt': {
        name: 'Bầu Trời Bất Diệt',
        description:
          'Khi hp giảm xuống dưới 30%, Đại Bàng Tự Do hồi phục một lượng hp đáng kể, phản ánh khả năng sống sót phi thường. (Hồi 25% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['freedom'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          if (self.current.hp < self.stats.hp * 0.3) {
            self.current.effect.push({
              effect: ({ self }) => {
                self.current.hp += self.stats.hp * 0.25;
              },
              duration: 0,
            });
          }
        },
      },
    },
  },
  'Hải Li Huyền Bí': {
    name: 'Hải Li Huyền Bí',
    description:
      'Hải Li Huyền Bí là sinh vật huyền bí của đại dương, với vẻ đẹp lấp lánh và quyến rũ, thu hút mọi ánh nhìn.',
    lore: 'Sinh ra từ sâu thẳm của đại dương, Hải Li Huyền Bí sở hữu khả năng phát sáng kỳ diệu, dùng ánh sáng của mình để thu hút con mồi và giao tiếp. Bí ẩn và không thể đoán trước, nó là sinh vật của ánh sáng và bóng tối.',
    stats: {
      hp: 180,
      physical_dame: 20,
      magic_dame: 60,
      physical_def: 30,
      magic_def: 50,
      speed: 40,
    },
    type: ['water', 'light'],
    skills: {
      'Ánh Sáng Huyền Bí': {
        name: 'Ánh Sáng Huyền Bí',
        description:
          'Phát ra ánh sáng huyền bí, làm choáng kẻ địch và gây sát thương phép. (Gây 70 sát thương phép và có 30% cơ hội làm choáng kẻ địch trong 2 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 70,
        },
        type: ['light'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          if (Math.random() < 0.3) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.adverseEffect.push('stun');
              },
              duration: 2,
            });
          }
        },
      },
      'Vũ Điệu Biển Cả': {
        name: 'Vũ Điệu Biển Cả',
        description:
          'Hải Li Huyền Bí nhảy múa, tạo ra sóng nước mạnh mẽ, tăng khả năng né tránh và hồi phục hp. (Tăng 20% khả năng né tránh và hồi 15% hp trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.dodge += self.stats.speed * 0.2;
              self.current.hp += self.stats.hp * 0.15;
            },
            duration: 3,
          });
        },
      },
      'Tiếng Gọi Thủy Triều': {
        name: 'Tiếng Gọi Thủy Triều',
        description:
          'Gọi thủy triều cao, tạo ra lớp bảo vệ và tăng sức mạnh phép thuật. (Tạo giáp ảo bằng 25% hp và tăng 20% sát thương phép trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.25;
              self.current.magic_dame += self.stats.magic_dame * 0.2;
            },
            duration: 4,
          });
        },
      },
      'Hồi Phục Biển Cả': {
        name: 'Hồi Phục Biển Cả',
        description:
          'Sử dụng năng lượng của biển cả để hồi phục, phục hồi hp cho bản thân và đồng minh. (Hồi 30% hp cho bản thân và đồng minh.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self, allies }) => {
          self.current.hp += self.stats.hp * 0.3;
          allies.forEach((ally) => {
            ally.current.hp += ally.stats.hp * 0.3;
          });
        },
      },
    },
  },
  'Heo Biển Mạo Hiểm': {
    name: 'Heo Biển Mạo Hiểm',
    description:
      'Heo Biển Mạo Hiểm là một Enti thích phiêu lưu trên biển, luôn tìm kiếm những chân trời mới và thách thức bản thân mình. Với chiếc mũ cướp biển nhỏ và la bàn treo cổ, nó không bao giờ lạc lối giữa bao la đại dương.',
    lore: 'Sinh ra trong một gia đình Heo Biển yêu thích tự do, từ nhỏ Heo Biển Mạo Hiểm đã mơ ước được khám phá mọi ngóc ngách của đại dương. Nó thích phiêu lưu qua những vùng biển chưa ai biết đến, gặp gỡ và học hỏi từ các sinh vật biển khác nhau.',
    stats: {
      hp: 280,
      physical_dame: 60,
      magic_dame: 50,
      physical_def: 40,
      magic_def: 45,
      speed: 70,
    },
    type: ['water', 'adventure'],
    skills: {
      'Sóng Gió Phiêu Lưu': {
        name: 'Sóng Gió Phiêu Lưu',
        description:
          'Heo Biển Mạo Hiểm tạo ra một trận sóng gió mạnh mẽ, gây sát thương và làm chậm tốc độ di chuyển của đối thủ. (Gây 75 sát thương phép và giảm 20% tốc độ di chuyển của đối thủ trong 3 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 75,
        },
        type: ['water'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.speed -= enemy.stats.speed * 0.2;
            },
            duration: 3,
          });
        },
      },
      'La Bàn Hướng Dẫn': {
        name: 'La Bàn Hướng Dẫn',
        description:
          'Sử dụng la bàn ma thuật, Heo Biển Mạo Hiểm tăng khả năng né tránh và phản ứng cho bản thân và đồng minh. (Tăng 15% khả năng né tránh và tốc độ cho bản thân và đồng minh trong 4 lượt.)',
        target: ['self', 'allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['adventure'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self, allies }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.dodge += self.stats.speed * 0.15;
              self.current.speed += self.stats.speed * 0.15;
            },
            duration: 4,
          });
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.dodge += ally.stats.speed * 0.15;
                ally.current.speed += ally.stats.speed * 0.15;
              },
              duration: 4,
            });
          });
        },
      },
      'Hải Trình Khám Phá': {
        name: 'Hải Trình Khám Phá',
        description:
          'Khám phá một hải trình mới, Heo Biển Mạo Hiểm hồi phục hp cho bản thân và tăng sức mạnh tấn công. (Hồi 20% hp và tăng 25% sức mạnh tấn công vật lý trong 2 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self }) => {
          self.current.hp += self.stats.hp * 0.2;
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.25;
            },
            duration: 2,
          });
        },
      },
      'Dũng Khí Phi Thường': {
        name: 'Dũng Khí Phi Thường',
        description:
          'Khi hp giảm xuống dưới 30%, Heo Biển Mạo Hiểm tăng đáng kể sức mạnh tấn công và phòng thủ của mình, phản ánh tinh thần không bao giờ từ bỏ. (Tăng 30% sức mạnh tấn công và phòng thủ trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['adventure'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.3;
              self.current.physical_def += self.stats.physical_def * 0.3;
            },
            duration: 3,
          });
        },
      },
    },
  },
  'Gấu Cọc Cằn': {
    name: 'Gấu Cọc Cằn',
    description:
      'Gấu Cọc Cằn là hình ảnh của sự bướng bỉnh và mạnh mẽ, với bản chất không khoan nhượng và luôn sẵn lòng đối đầu với mọi thách thức.',
    lore: 'Gấu Cọc Cằn từng là người hùng của những chuyến phiêu lưu qua rừng rậm và núi non. Mặc dù có vẻ ngoài cau có và không mấy thân thiện, nhưng bên trong nó là một trái tim dũng cảm, không bao giờ từ bỏ.',
    stats: {
      hp: 350,
      physical_dame: 75,
      magic_dame: 0,
      physical_def: 60,
      magic_def: 40,
      speed: 30,
    },
    type: ['earth', 'adventure'],
    skills: {
      'Dấu Chân Lữ Hành': {
        name: 'Dấu Chân Lữ Hành',
        description:
          'Gấu Cọc Cằn sử dụng kinh nghiệm phiêu lưu của mình để tăng cường sức mạnh cho bản thân, tăng 20% sức mạnh tấn công vật lý và giảm thời gian hồi của kỹ năng. (Tăng 20% sức mạnh tấn công vật lý và giảm 1 lượt countdown cho kỹ năng trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.2;
              self.current.skills.forEach((skill) => {
                skill.current.countdown -= 1;
              });
            },
            duration: 3,
          });
        },
      },
      'Gầm Gừ Đe Dọa': {
        name: 'Gầm Gừ Đe Dọa',
        description:
          'Gấu Cọc Cằn gầm gừ mạnh mẽ, gây sợ hãi cho đối thủ và giảm 15% tốc độ và sức mạnh tấn công vật lý của chúng. (Giảm 15% tốc độ và sức mạnh tấn công vật lý của kẻ địch trong 3 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.15;
                enemy.current.physical_dame -= enemy.stats.physical_dame * 0.15;
              },
              duration: 3,
            });
          });
        },
      },
      'Phản Đòn Mạnh Mẽ': {
        name: 'Phản Đòn Mạnh Mẽ',
        description:
          'Khi bị tấn công, Gấu Cọc Cằn có cơ hội phản đòn, gây 50 sát thương vật lý cho kẻ địch và tăng giáp ảo cho bản thân bằng 10% hp. (Có 30% cơ hội phản đòn.)',
        target: ['enemy'],
        damage: {
          physical: 50,
          magic: 0,
        },
        type: ['earth'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self, enemy }) => {
          if (Math.random() < 0.3) {
            enemy.current.hp -= 50;
            self.current.shield += self.stats.hp * 0.1;
          }
        },
      },
      'Bản Năng Bảo Vệ': {
        name: 'Bản Năng Bảo Vệ',
        description:
          'Khi hp giảm xuống dưới 30%, Gấu Cọc Cằn tăng cường sức mạnh tấn công và phòng thủ, phản ánh bản năng bảo vệ của mình. (Tăng 30% sức mạnh tấn công và phòng thủ trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['adventure'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.3;
              self.current.physical_def += self.stats.physical_def * 0.3;
            },
            duration: 3,
          });
        },
      },
    },
  },
  'Voi Cung Thủ': {
    name: 'Voi Cung Thủ',
    description:
      'Voi Cung Thủ là hình ảnh của sức mạnh và tính nóng nảy, với khả năng sử dụng nỏ một cách thuần thục. Bản lĩnh và sự dũng cảm khiến nó trở thành một chiến binh không thể ngăn cản trên chiến trường.',
    lore: 'Sinh ra trong một bộ tộc Voi chiến binh cổ xưa, Voi Cung Thủ đã được rèn giũa kỹ năng từ nhỏ. Nó mang trên mình bộ giáp được chế tác từ những vật liệu tự nhiên nhất, kết hợp với bản tính nóng nảy để tạo nên một chiến binh đáng gờm.',
    stats: {
      hp: 350,
      physical_dame: 75,
      magic_dame: 0,
      physical_def: 50,
      magic_def: 30,
      speed: 40,
    },
    type: ['earth', 'fire'],
    skills: {
      'Mũi Tên Lửa': {
        name: 'Mũi Tên Lửa',
        description:
          'Bắn một mũi tên lửa mạnh mẽ từ chiếc nỏ, gây sát thương lớn và có khả năng thiêu đốt mục tiêu. (Gây 100 sát thương vật lý và thiêu đốt đối thủ, gây thêm 20 sát thương mỗi lượt trong 3 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 100,
          magic: 0,
        },
        type: ['fire'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.adverseEffect.push('burn');
            },
            duration: 3, // 3 turn
          });
        },
      },
      'Giận Dữ': {
        name: 'Giận Dữ',
        description:
          'Kích hoạt sự giận dữ, tăng sức mạnh tấn công vật lý cho bản thân. (Tăng 50% sát thương vật lý trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['fire'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_dame += self.stats.physical_dame * 0.5;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Phản Đòn': {
        name: 'Phản Đòn',
        description:
          'Khi bị tấn công, có cơ hội phản đòn gây sát thương cho kẻ địch. (Có 20% khả năng phản đòn, gây 50 sát thương vật lý.)',
        target: ['enemy'],
        damage: {
          physical: 50,
          magic: 0,
        },
        type: ['earth'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self, enemy }) => {
          if (self.isAttacked && Math.random() < 0.2) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.hp -= 50;
              },
              duration: 0, // 0 turn
            });
          }
        },
      },
      'Bức Tường Đất': {
        name: 'Bức Tường Đất',
        description:
          'Tạo ra một bức tường đất vững chắc trước mặt, tăng khả năng phòng thủ. (Tăng 30% phòng thủ vật lý trong 3 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_def += self.stats.physical_def * 0.3;
            },
            duration: 3, // 3 turn
          });
        },
      },
    },
  },
  'Rùa Pháo Thủ': {
    name: 'Rùa Pháo Thủ',
    description:
      'Rùa Pháo Thủ là biểu tượng của sự vui vẻ và hài hước, với khả năng chiến đấu độc đáo thông qua việc sử dụng pháo tích hợp trên lưng. Không chỉ là một chiến binh, Rùa Pháo Thủ còn là nguồn cảm hứng vui vẻ cho đồng đội.',
    lore: 'Trong một ngôi làng nhỏ bên bờ biển, Rùa Pháo Thủ được biết đến là người giữ gìn hòa bình với tinh thần lạc quan. Vũ khí của mình không chỉ dùng để chiến đấu mà còn tạo tiếng cười, Rùa Pháo Thủ luôn tìm cách giải quyết mọi tình huống bằng sự thông minh và hài hước.',
    stats: {
      hp: 300,
      physical_dame: 0,
      magic_dame: 80,
      physical_def: 70,
      magic_def: 50,
      speed: 20,
    },
    type: ['water', 'fun'],
    skills: {
      'Pháo Confetti': {
        name: 'Pháo Confetti',
        description:
          'Bắn một loạt confetti về phía kẻ địch, gây ra sự hỗn loạn và giảm tốc độ của chúng. (Giảm 20% tốc độ của kẻ địch trong 3 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['fun'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.speed -= enemy.stats.speed * 0.2;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
      'Tiếng Cười Nhiễm Khuẩn': {
        name: 'Tiếng Cười Nhiễm Khuẩn',
        description:
          'Sử dụng tiếng cười để nhiễm khuẩn tinh thần, tăng tốc độ và sức mạnh cho đồng minh. (Tăng 15% tốc độ và 10% sát thương cho tất cả đồng minh trong 4 lượt.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['fun'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.speed += ally.stats.speed * 0.15;
                ally.current.physical_dame += ally.stats.physical_dame * 0.1;
                ally.current.magic_dame += ally.stats.magic_dame * 0.1;
              },
              duration: 4, // 4 turn
            });
          });
        },
      },
      'Bức Tường Mai': {
        name: 'Bức Tường Mai',
        description:
          'Tạo ra một bức tường mai rắn chắc xung quanh, tăng đáng kể khả năng phòng thủ. (Tạo giáp ảo bằng 25% hp.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['water'],
        use: 'active',
        countdown: 6,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shield += self.stats.hp * 0.25;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Vũ Điệu Rùa': {
        name: 'Vũ Điệu Rùa',
        description:
          'Thực hiện một điệu nhảy nghịch ngợm, làm giảm sự tập trung của kẻ địch và giảm khả năng phòng thủ của chúng. (Giảm 15% phòng thủ vật lý và phép của kẻ địch trong 3 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['fun'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.physical_def -= enemy.stats.physical_def * 0.15;
                enemy.current.magic_def -= enemy.stats.magic_def * 0.15;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
    },
  },
  'Bé Quậy Phá': {
    name: 'Bé Quậy Phá',
    description:
      'Bé Quậy Phá và chiếc xe đẩy của mình tạo nên một cặp đôi nghịch ngợm, không bao giờ làm cho môi trường xung quanh yên bình. Bé mặc chiếc áo choàng siêu anh hùng và luôn tìm cách gây chú ý bằng cách phá phách nhỏ nhặt nhưng đáng yêu.',
    lore: 'Một ngày kia, chiếc xe đẩy bị phép thuật biến thành một Enti sống động, trở thành người bạn đồng hành không thể tách rời của Bé Quậy Phá. Cùng nhau, họ khám phá thế giới xung quanh bằng những trò nghịch phá không bao giờ kết thúc.',
    stats: {
      hp: 250,
      physical_dame: 20,
      magic_dame: 60,
      physical_def: 40,
      magic_def: 50,
      speed: 30,
    },
    type: ['mischief', 'magic'],
    skills: {
      'Bong Bóng Ma Thuật': {
        name: 'Bong Bóng Ma Thuật',
        description:
          'Tạo ra những bong bóng ma thuật vừa để chơi vừa có thể gây nhỏ giọt sát thương phép lên toàn bộ kẻ địch. (Gây 30 sát thương chuẩn cho toàn bộ kẻ địch trong 3 lượt.)',
        target: ['all_enemies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['magic'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ all_enemies }) => {
          all_enemies.forEach((enemy) => {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.hp -= 30;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
      'Tiếng Cười Dễ Thương': {
        name: 'Tiếng Cười Dễ Thương',
        description:
          'Tiếng cười của bé phát ra làm tăng tinh thần cho đồng minh, giúp họ phục hồi một lượng nhỏ HP. (Hồi 15% hp cho tất cả đồng minh.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['mischief'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.hp += ally.stats.hp * 0.15;
          });
        },
      },
      'Chạy Trốn Nhanh Nhẹn': {
        name: 'Chạy Trốn Nhanh Nhẹn',
        description:
          'Sử dụng sự nhanh nhẹn của xe đẩy, tăng khả năng né tránh cho bản thân. (Tăng 25% khả năng né tránh trong 2 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['mischief'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.dodge += self.current.dodge * 0.25;
            },
            duration: 2, // 2 turn
          });
        },
      },
      'Quả Cầu Năng Lượng': {
        name: 'Quả Cầu Năng Lượng',
        description:
          'Tạo ra một quả cầu năng lượng từ đồ chơi, gây sát thương ma thuật lớn cho một kẻ địch. (Gây 80 sát thương ma thuật cho kẻ địch.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 80,
        },
        type: ['magic'],
        use: 'active',
        countdown: 2,
        effect_callback: () => {},
      },
    },
  },
  'Máy Bán Nước Ma Thuật': {
    name: 'Máy Bán Nước Ma Thuật',
    description:
      'Máy Bán Nước Ma Thuật không chỉ cung cấp nước giải khát mà còn phục vụ các phép thuật và vật phẩm phù thủy cho những người phiêu lưu trong thế giới game. Với giao diện hiển thị tươi cười và năng động, nó làm cho mỗi giao dịch trở nên thú vị và đầy bất ngờ.',
    lore: 'Được phù phép bởi một pháp sư lỗi lạc, Máy Bán Nước Ma Thuật có khả năng tự di chuyển và phục vụ các anh hùng. Mỗi khi người chơi cần tái tạo năng lượng hoặc tìm kiếm vật phẩm quý giá, máy này luôn xuất hiện kịp thời với đầy đủ các loại thức uống và bảo bối phép thuật.',
    stats: {
      hp: 500,
      physical_dame: 0,
      magic_dame: 0,
      physical_def: 100,
      magic_def: 100,
      speed: 10,
    },
    type: ['magic', 'utility'],
    skills: {
      'Phục Hồi Năng Lượng': {
        name: 'Phục Hồi Năng Lượng',
        description:
          'Tạo ra một thức uống ma thuật, giúp hồi phục HP và MP cho đồng minh. (Hồi 100 HP cho tất cả đồng minh.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['magic'],
        use: 'active',
        countdown: 5,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.hp += 100;
          });
        },
      },
      'Bảo Vệ Ma Pháp': {
        name: 'Bảo Vệ Ma Pháp',
        description:
          'Kích hoạt lá chắn ma pháp bảo vệ bản thân khỏi mọi sát thương trong 1 lượt. (Tạo một lá chắn ảo hấp thụ mọi sát thương nhận vào.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['magic'],
        use: 'active',
        countdown: 7,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.shieldInfinity = true;
            },
            duration: 1, // 1 turn
          });
        },
      },
      'Giải Pháp Tốc Độ': {
        name: 'Giải Pháp Tốc Độ',
        description:
          'Phát hành một loại thức uống tăng cường, nâng cao tốc độ di chuyển và tấn công của đồng minh. (Tăng 30% tốc độ cho tất cả đồng minh trong 3 lượt.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['utility'],
        use: 'active',
        countdown: 6,
        effect_callback: ({ allies }) => {
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current.speed += ally.stats.speed * 0.3;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
      'Quà Tặng Bất Ngờ': {
        name: 'Quà Tặng Bất Ngờ',
        description:
          'Ngẫu nhiên phát ra một vật phẩm hoặc phép thuật hỗ trợ, giúp ích cho cuộc phiêu lưu của đồng minh. (Cung cấp một buff ngẫu nhiên cho đồng minh.)',
        target: ['allies'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['magic', 'utility'],
        use: 'active',
        countdown: 10,
        effect_callback: ({ allies }) => {
          const buffs = ['hp', 'physical_dame', 'magic_dame', 'physical_def', 'magic_def', 'speed'];
          const randomBuff = buffs[Math.floor(Math.random() * buffs.length)];
          allies.forEach((ally) => {
            ally.current.effect.push({
              effect: ({ ally }) => {
                ally.current[randomBuff] += ally.stats[randomBuff] * 0.2;
              },
              duration: 3, // 3 turn
            });
          });
        },
      },
      'Phục Hồi Nước': {
        name: 'Phục Hồi Nước',
        description:
          'Tạo ra một loại nước phục hồi, giúp hồi phục HP cho bản thân. (Hồi 200 HP cho bản thân.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['magic'],
        use: 'active',
        countdown: 3,
        effect_callback: ({ self }) => {
          self.current.hp += 200;
        },
      },
    },
  },
  'Long Quân Đồng Hành': {
    name: 'Long Quân Đồng Hành',
    description:
      'Long Quân Đồng Hành là sự kết hợp hoàn hảo giữa sức mạnh và lòng dũng cảm của một chiến binh rồng bé nhỏ cùng sự bền bỉ và kiên nhẫn của một chú lừa. Dù nhỏ bé, nhưng không hề kém cạnh về sức mạnh và ý chí chiến đấu.',
    lore: 'Trong thế giới SUMMON ANYTHING, Long Quân Đồng Hành được triệu hồi từ vùng đất huyền thoại, nơi cả rồng và lừa cùng chung sống hòa bình. Chúng kết hợp sức mạnh của mình để bảo vệ và hỗ trợ những chiến binh dũng cảm trên hành trình của họ. Long Quân Đồng Hành không chỉ là biểu tượng của sự dũng cảm mà còn là tình bạn và sự hợp nhất.',
    stats: {
      hp: 250,
      physical_dame: 60,
      magic_dame: 75,
      physical_def: 50,
      magic_def: 65,
      speed: 40,
    },
    type: ['fire', 'earth'],
    skills: {
      'Lửa Long Quân': {
        name: 'Lửa Long Quân',
        description:
          'Phun trào ngọn lửa huyền thoại, gây sát thương lớn và thiêu đốt kẻ địch trong vòng bảo vệ. (Gây 100 sát thương phép và thiêu đốt kẻ địch, gây thêm 20 sát thương mỗi lượt trong 3 lượt.)',
        target: ['enemy'],
        damage: {
          physical: 0,
          magic: 100,
        },
        type: ['fire'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ enemy }) => {
          enemy.current.effect.push({
            effect: ({ enemy }) => {
              enemy.current.adverseEffect.push('burn');
            },
            duration: 3, // 3 turn
          });
        },
      },
      'Bảo Vệ Kiên Cường': {
        name: 'Bảo Vệ Kiên Cường',
        description:
          'Sử dụng sức mạnh của lừa để tăng cường phòng thủ, giảm sát thương nhận vào từ mọi nguồn trong một thời gian ngắn. (Tăng 20% phòng thủ vật lý và phép cho bản thân trong 4 lượt.)',
        target: ['self'],
        damage: {
          physical: 0,
          magic: 0,
        },
        type: ['earth'],
        use: 'active',
        countdown: 4,
        effect_callback: ({ self }) => {
          self.current.effect.push({
            effect: ({ self }) => {
              self.current.physical_def += self.stats.physical_def * 0.2;
              self.current.magic_def += self.stats.magic_def * 0.2;
            },
            duration: 4, // 4 turn
          });
        },
      },
      'Hỏa Kích Nghịch Thiên': {
        name: 'Hỏa Kích Nghịch Thiên',
        description:
          'Kích hoạt sức mạnh tối thượng, gây sát thương cực lớn lên một mục tiêu và các kẻ địch xung quanh nó. (Gây 100 sát thương phép cho mục tiêu và 50 sát thương phép cho kẻ địch xung quanh.)',
        target: ['enemy', 'around_enemies'],
        damage: {
          physical: 0,
          magic: 100,
        },
        type: ['fire', 'earth'],
        use: 'active',
        countdown: 5,
        effect_callback: () => {},
      },
      'Phản Đòn Mạnh Mẽ': {
        name: 'Phản Đòn Mạnh Mẽ',
        description:
          'Khi bị tấn công, có cơ hội phản đòn gây sát thương cho kẻ địch. (Có 30% khả năng phản đòn, gây 50 sát thương chuẩn.)',
        target: ['enemy'],
        damage: {
          physical: 50,
          magic: 0,
        },
        type: ['earth'],
        use: 'passive',
        countdown: 0,
        effect_callback: ({ self, enemy }) => {
          if (self.isAttacked && Math.random() < 0.3) {
            enemy.current.effect.push({
              effect: ({ enemy }) => {
                enemy.current.hp -= 50;
              },
              duration: 0, // 0 turn
            });
          }
        },
      },
    },
  },
};
