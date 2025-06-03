import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Container,
  Image,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  Title,
} from '@mantine/core';
import APP_COLORS from '@/theme/colors';

type ContentBlockType = {
  title?: string;
  subtitle?: string;
  description: string;
};

type DataPartType = {
  value: string;
  content: ContentBlockType[];
};

const jobPositions = [
  { position: 'CTV Kinh doanh', department: 'Kinh doanh', location: 'Từ xa', status: 'Đang tuyển' },
  {
    position: 'Chuyên viên học thuật (tiếng Anh)',
    department: 'R&D',
    location: 'Từ xa',
    status: 'Đã đủ',
  },
  {
    position: 'Chuyên viên học thuật (tiếng Trung)',
    department: 'R&D',
    location: 'Từ xa',
    status: 'Đã đủ',
  },
  { position: 'Chăm sóc khách hàng', department: 'Kinh doanh', location: 'Từ xa', status: 'Đã đủ' },
];

const data: DataPartType[] = [
  {
    value: 'Hợp tác trong các dự án công nghệ giáo dục',
    content: [
      {
        title: 'Cam kết hợp tác',
        description:
          'STUTU cam kết đồng hành cùng các đối tác trong việc xây dựng và tạo ra các giải pháp công nghệ giáo dục tiên tiến, tận dụng tối đa sức mạnh của đội ngũ học thuật với 7 năm kinh nghiệm đào tạo ngôn ngữ và đội ngũ phát triển công nghệ với 10 năm kinh nghiệm trong phát triển phần mềm. Qua đó, STUTU mang đến cơ hội hợp tác chiến lược với các đối tác, nhằm tạo ra những giải pháp số hóa đáp ứng nhu cầu chuyển đổi và nâng cao chất lượng giảng dạy - học tập.',
      },
      {
        title: 'Các lĩnh vực hợp tác',
        subtitle: 'Nghiên cứu và Phát triển sản phẩm',
        description:
          'STUTU chào đón cơ hội hợp tác cùng các đối tác trong việc triển khai các dự án R&D nhằm xây dựng các ứng dụng di động, hệ thống quản lý học tập (LMS), cũng như các công cụ tương tác trực tuyến. Sự kết hợp giữa chuyên môn đào tạo và kinh nghiệm phát triển công nghệ cho phép chúng tôi tạo ra các giải pháp cá nhân hóa, tối ưu hóa quá trình giảng dạy và nâng cao hiệu quả học tập.',
      },
      {
        subtitle: 'Tích hợp công nghệ vào quy trình giảng dạy',
        description:
          'STUTU chào đón cơ hội hợp tác với các trường học, trung tâm đào tạo và doanh nghiệp để triển khai các hệ thống số hóa, từ việc quản lý học viên, chấm điểm tự động cho đến tổ chức các lớp học trực tuyến với tính năng tương tác cao, giúp tối ưu hóa hoạt động quản lý, đồng thời mang lại trải nghiệm học tập hiện đại cho người dùng.',
      },
      {
        subtitle: 'Đổi mới sáng tạo và chuyển đổi số',
        description:
          'STUTU và các đối tác sẽ cùng nhau khai thác các công nghệ tiên tiến như trí tuệ nhân tạo, học máy và phân tích dữ liệu để dự đoán xu hướng học tập, cải tiến phương pháp giảng dạy và tạo ra những giải pháp đột phá trong ngành giáo dục. Qua đó, không chỉ nâng cao chất lượng đào tạo mà còn đóng góp vào việc định hình xu hướng giáo dục số tại Việt Nam trong tương lai.',
      },
      {
        subtitle: 'Hỗ trợ và tư vấn',
        description:
          'STUTU không chỉ cung cấp sản phẩm, dịch vụ công nghệ tiên tiến mà còn đồng hành cùng đối tác từ khâu lên ý tưởng đến triển khai và theo dõi hiệu quả dự án. Đội ngũ chuyên gia của STUTU sẽ tư vấn chiến lược, hỗ trợ kỹ thuật và đào tạo, giúp các đối tác tối ưu hóa quy trình và tạo ra giá trị bền vững cho hệ sinh thái giáo dục.',
      },
    ],
  },
  {
    value: 'Đào tạo cho doanh nghiệp',
    content: [
      {
        description:
          'Trong bối cảnh hội nhập toàn cầu và cạnh tranh ngày càng khốc liệt, việc nâng cao trình độ ngoại ngữ là yếu tố then chốt giúp doanh nghiệp phát triển mạnh mẽ. STUTU tự hào mang đến chương trình đào tạo ngoại ngữ dành riêng cho doanh nghiệp, với đội ngũ giảng viên chuyên nghiệp kết hợp giữa kiến thức học thuật sâu sắc và kinh nghiệm thực tiễn phong phú.',
      },
      {
        title: 'Đội ngũ học thuật của chúng tôi',
        description:
          'Đội ngũ học thuật của STUTU bao gồm các chuyên gia có nền tảng học thuật vững chắc, được đào tạo bài bản và có nhiều năm kinh nghiệm giảng dạy. STUTU đảm bảo giảng dạy ngoại ngữ dựa trên việc cung cấp kiến thức nền tảng và lý thuyết chuyên sâu giúp học viên hiểu rõ các khái niệm cốt lõi và xu hướng phát triển của ngành nghề trong bối cảnh quốc tế. Song song với kiến thức học thuật, đội ngũ học thuật của chúng tôi còn mang đến kinh nghiệm thực tế từ các dự án và hoạt động kinh doanh cụ thể. Điều này giúp chuyển giao những bài học từ thực tiễn vào ứng dụng ngay trong công việc, trang bị cho học viên khả năng ngôn ngữ linh hoạt trong đa dạng các tình huống kinh doanh.',
      },
      {
        title: 'Phương pháp giảng dạy',
        subtitle: 'Học tập tương tác và thực hành',
        description:
          'Chương trình đào tạo được thiết kế với các bài học tương tác, kết hợp giữa giảng dạy trực tuyến và trực tiếp. Học viên sẽ tham gia vào các buổi thảo luận, đóng vai, và các bài tập giao tiếp nhằm áp dụng kiến thức vào tình huống thực tế.',
      },
      {
        subtitle: 'Case Studies và mô phỏng tình huống',
        description:
          'Để mang lại trải nghiệm học tập sống động, các bài giảng bao gồm phân tích các tình huống kinh doanh quốc tế và mô phỏng giao tiếp chuyên nghiệp. Điều này giúp học viên hiểu rõ cách sử dụng ngoại ngữ trong các kịch bản thực tế và cải thiện phản xạ giao tiếp.',
      },
      {
        subtitle: 'Đào tạo theo nhu cầu riêng của doanh nghiệp',
        description:
          'STUTU xây dựng các khóa học được tùy chỉnh dựa trên đặc thù và yêu cầu của từng doanh nghiệp, đảm bảo nội dung sẽ phù hợp với mục tiêu phát triển kỹ năng ngoại ngữ của từng cá nhân và tập thể.',
      },
    ],
  },
  {
    value: 'Quảng cáo',
    content: [
      {
        description:
          'STUTU mang đến cơ hội quảng cáo hiệu quả trên website với lượng truy cập chất lượng cao, đặc biệt là đối tượng người dùng trẻ – những người có nhu cầu học tập và phát triển bản thân:',
      },
      {
        title: 'Tiếp cận đối tượng mục tiêu',
        description:
          'Quảng cáo trên nền tảng của STUTU giúp doanh nghiệp và các tổ chức tiếp cận trực tiếp với nhóm khách hàng đang tìm kiếm các dịch vụ giáo dục và phát triển kỹ năng.',
      },
      {
        title: 'Đa dạng hình dạng quảng cáo',
        description:
          'STUTU cung cấp nhiều gói quảng cáo từ banner, pop-up đến nội dung tài trợ, cho phép doanh nghiệp lựa chọn hình thức phù hợp với chiến lược marketing của mình.',
      },
      {
        title: 'Hỗ trợ và tư vấn chuyên nghiệp',
        description:
          'Đội ngũ chuyên gia của STUTU luôn sẵn sàng tư vấn và hỗ trợ doanh nghiệp trong việc xây dựng và triển khai chiến dịch quảng cáo hiệu quả.',
      },
      {
        title: 'Đối tác tiềm năng',
        description:
          'Để tạo ra trải nghiệm học tập tốt nhất cho người dùng, STUTU ưu tiên cung cấp dịch vụ quảng bá tới các đối tác giúp bổ trợ cho hệ sinh thái công nghệ giáo dục của STUTU hướng tới.',
      },
      {
        title: 'Các trường trung học, đại học, cao đẳng',
        description:
          'Đội ngũ chuyên gia của STUTU cam kết đồng hành cùng các trường đối tác trong việc xây dựng chiến lược quảng cáo, từ việc xác định thông điệp phù hợp, lựa chọn định dạng quảng cáo đến triển khai và theo dõi hiệu quả chiến dịch. Nhờ đó, tối ưu hóa ngân sách quảng cáo và đạt được hiệu quả truyền thông cao nhất.',
      },
      {
        title: 'Trung tâm đào tạo, các khóa học ngắn hạn và học viên chuyên ngành',
        description:
          'Các trung tâm đào tạo và học viên chuyên ngành luôn cần thu hút học viên mong muốn nâng cao kỹ năng chuyên môn trong thời đại chuyển đổi số. STUTU giúp quảng bá các khóa học, chương trình đào tạo qua nền tảng trực tuyến, tiếp cận học viên một cách trực tiếp và hiệu quả.',
      },
      {
        title: 'Doanh nghiệp và startup trong lĩnh vực công nghệ giáo dục',
        description:
          'Các doanh nghiệp và startup phát triển phần mềm, ứng dụng di động, thiết bị hỗ trợ giảng dạy (smart board, VR/AR) hoặc các công cụ tương tác trực tuyến đều có thể tận dụng nền tảng của STUTU để tiếp cận khách hàng chính là những học viên, giáo viên và phụ huynh đang tìm kiếm giải pháp hiện đại trong giáo dục. Đó là nguời STUTU cam kết hỗ trợ doanh nghiệp và startup xây dựng thông điệp quảng cáo hiệu quả, lựa chọn kênh truyền thông phù hợp và tối ưu hóa ngân sách.',
      },
    ],
  },
];

const JoinUsPage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);

  const rows = jobPositions.map((job) => (
    <TableTr key={job.position}>
      <TableTd>{job.position}</TableTd>
      <TableTd>{job.department}</TableTd>
      <TableTd>{job.location}</TableTd>
      <TableTd>{job.status}</TableTd>
    </TableTr>
  ));

  const items = data.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionControl bd={`1px solid ${APP_COLORS.primaryText}`} style={{ borderRadius: '8px' }}>
        {item.value}
      </AccordionControl>
      <AccordionPanel>
        <Stack gap="lg">
          {item.content.map((content, index) => (
            <Stack key={index} gap={0}>
              {content.title && <Title order={4}>{content.title}</Title>}
              {content.subtitle && (
                <Title order={4} c="gray">
                  {content.subtitle}
                </Title>
              )}
              <Text>{content.description}</Text>
            </Stack>
          ))}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  ));

  return (
    <Stack>
      <Image src="/images/join_us_hero_section.svg" />
      <Container size="md" my="xl">
        <Stack>
          <Stack gap={0}>
            <Title order={1} ta="center" lh={1.25}>
              Thế giới này được tạo ra bởi <br /> những người dám làm
            </Title>
            <Text ta="center" variant="subtitle">
              Bạn đang nghĩ gì nào? Làm ngay thôi
            </Text>
          </Stack>
          <Accordion
            mb={50}
            defaultValue="Apples"
            styles={{
              control: {
                border: `1px solid ${APP_COLORS.primaryText}`,
                borderRadius: '8px',
              },
              label: {
                textAlign: 'center',
                fontSize: 30,
              },
              chevron: {
                display: 'none',
              },
              item: {
                border: 'none',
              },
              content: {
                paddingTop: 16,
              },
            }}
          >
            <AccordionItem value="Tham gia đội ngũ STUTU">
              <AccordionControl
                bd={`1px solid ${APP_COLORS.primaryText}`}
                style={{ borderRadius: '8px' }}
              >
                Tham gia đội ngũ STUTU
              </AccordionControl>
              <AccordionPanel>
                <Stack gap="xl">
                  <Text>
                    "STUTU đang tìm kiếm những cá nhân đam mê, sáng tạo và nhiệt huyết với lĩnh vực
                    công nghệ giáo dục. Bạn mong muốn góp phần thay đổi cách thức học tập và giảng
                    dạy hiện tại, hãy gia nhập đội ngũ của chúng tôi – nơi bạn sẽ có cơ hội phát
                    triển chuyên môn, thử thách bản thân và biến những ý tưởng đột phá thành hiện
                    thực, góp phần định hình tương lai giáo dục số."
                  </Text>

                  <Table
                    striped
                    highlightOnHover
                    withTableBorder
                    horizontalSpacing="md"
                    verticalSpacing="xs"
                  >
                    <TableThead>
                      <TableTr>
                        <TableTh>Vị trí</TableTh>
                        <TableTh>Bộ phận</TableTh>
                        <TableTh>Địa điểm làm việc</TableTh>
                        <TableTh>Trạng thái</TableTh>
                      </TableTr>
                    </TableThead>
                    <TableTbody>{rows}</TableTbody>
                  </Table>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            {items}
          </Accordion>
        </Stack>
      </Container>
    </Stack>
  );
};

export default JoinUsPage;
